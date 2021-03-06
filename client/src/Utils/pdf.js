// Import Plugins
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

export default function createPDF(doc) {
  var stories = doc.userStories;
  var storiesHeaders = ["who", "wants", "objective"];

  var pages = doc.pages;
  var pagesHeaders = ["name", "description"];

  var features = doc.features;
  var featuresHeaders = ["name", "description"];

  //Get the backend list
  var backendArr = [];
  doc.backend.forEach((item) => backendArr.push(item.description));
  var backendList = backendArr.join(", ");

  //Get the frontend list
  var frontendArr = [];
  doc.frontend.forEach((item) => frontendArr.push(item.description));
  var frontendList = frontendArr.join(", ");

  //Get the security list
  var securityArr = [];
  doc.security.forEach((item) => securityArr.push(item.description));
  var securityList = securityArr.join(", ");

  //Get the libraries list
  var librariesArr = [];
  doc.libraries.forEach((item) => librariesArr.push(item.description));
  var librariesList = librariesArr.join(", ");

  function buildTableBody(data, columns) {
    var body = [];

    body.push(columns);

    data.forEach(function (row) {
      var dataRow = [];

      columns.forEach(function (column) {
        dataRow.push(row[column].toString());
      });
      body.push(dataRow);
    });

    // Fix table headers
    switch (columns[0]) {
      case "who":
        columns[0] = "As a...";
        columns[1] = "I want to...";
        columns[2] = "So I can..";
        break;
      case "name":
        columns[0] = "Name";
        columns[1] = "Description";
        break;
      default:
        console.log(`Not found`);
    }
    return body;
  }

  function buildWidths(columns) {
    let widthArr = [];
    columns.forEach((column, i) => {
      widthArr.push("*");
    });
    return widthArr;
  }

  function table(data, columns) {
    return {
      table: {
        widths: buildWidths(columns),
        headerRows: 1,
        body: buildTableBody(data, columns),
      },
      layout: {
        hLineWidth: function (i, node) {
          if (i === 0 || i === node.table.body.length) {
            return 0;
          }
          return i === node.table.headerRows ? 2 : 1;
        },
        vLineWidth: function (i) {
          return 0;
        },
        hLineColor: function (i) {
          return i === 1 ? "black" : "#aaa";
        },
        paddingLeft: function (i) {
          return i === 0 ? 0 : 8;
        },
        paddingRight: function (i, node) {
          return i === node.table.widths.length - 1 ? 0 : 8;
        },
        paddingTop: function (i, node) {
          return 8;
        },
        paddingBottom: function (i, node) {
          return 8;
        },
      },
    };
  }

  var docDefinition = {
    pageSize: "A4",
    // [left, top, right, bottom] or [horizontal, vertical] or just a number for equal margins
    pageMargins: [40, 60, 40, 60],

    footer: {
      columns: [
        {
          text: [
            "Document generated by ",
            {
              text: "SRSGEN",
              link: "https://srsgen.netlify.app/",
              style: "link",
            },
          ],
          style: "footerText",
        },
        {
          text: [
            "Developed by ",
            {
              text: "Pedro Oliveira",
              link: "https://www.linkedin.com/in/pedromnoliveira/",
              style: "link",
            },
          ],
          alignment: "right",
          style: "footerText",
        },
      ],
      margin: [40, 0, 40, 0],
    },

    content: [
      // FIRST PAGE (Title and Description) #########################################################################
      {
        svg:
          '<svg xmlns="http://www.w3.org/2000/svg" width="39" height="31" viewBox="0 0 39 31"><g transform="translate(-103 -19)"><g transform="translate(103 19)"><path d="M11.7,31H3.9A3.892,3.892,0,0,1,0,27.125V3.875A3.892,3.892,0,0,1,3.9,0H15.6l3.9,3.875H35.1A3.892,3.892,0,0,1,39,7.749V19.375H35.1V11.625c0-.084,0-.168,0-.251s0-.163,0-.243c.011-1.258.02-2.345-.562-2.926a1.875,1.875,0,0,0-1.39-.457H17.55l-3.9-3.875h-7.8a1.875,1.875,0,0,0-1.39.457C3.878,4.912,3.887,6,3.9,7.256c0,.08,0,.16,0,.241s0,.168,0,.253V25.186c0,1.8,1.276,1.944,2.943,1.944.148,0,.3,0,.449,0H11.7V31Z" fill="#2699fb"/><g transform="translate(16.855 15.123)"><rect width="11.293" height="3.764" transform="translate(10.445 12.008)" fill="#2699fb"/><path d="M8.59,17.468l5.068-5.079L8.59,7.31l1.56-1.56,6.639,6.639L10.15,19.028Z" transform="translate(-8.59 -3.382)" fill="#2699fb"/></g></g></g></svg>',
      },
      {
        text: `${doc.title}`,
        style: "heading1",
      },
      {
        text: `${doc.description}`,
        style: "description",
        pageBreak: "after",
      },

      // SECOND PAGE (Goals and Description) #########################################################################
      { text: `Goals and Description`, style: "sectionHeader" },

      {
        text: `What is the goal of the project?`,
        style: "informationLabel",
      },
      { text: `${doc.goals}`, style: "paragraph" },

      {
        text: `What problems does the project solve?`,
        style: "informationLabel",
      },
      { text: `${doc.problems}`, style: "paragraph" },

      {
        text: `What is the vision?`,
        style: "informationLabel",
      },
      { text: `${doc.vision}`, style: "paragraph", pageBreak: "after" },

      // THIRD PAGE / USER STORIES (Stories, pages) #########################################################################
      { text: `User Stories`, style: "sectionHeader" },

      {
        text: `User stories`,
        style: "informationLabel",
      },
      table(stories, storiesHeaders),
      {
        text: `Pages`,
        style: "informationLabel",
        margin: [0, 30, 0, 8],
      },
      table(pages, pagesHeaders),

      // THIRD PAGE / USER STORIES (Stories, pages and Non Functional Requirements) #########################################################################
      {
        pageBreak: "before",
        text: `Non-Functional Requirements`,
        style: "sectionHeader",
      },
      {
        text: "Backend",
        style: "informationLabel",
      },
      {
        text: `${backendList}`,
        style: "paragraph",
      },
      {
        text: "Frontend",
        style: "informationLabel",
      },
      {
        text: `${frontendList}`,
        style: "paragraph",
      },
      {
        text: "Security",
        style: "informationLabel",
      },
      {
        text: `${securityList}`,
        style: "paragraph",
      },
      {
        text: "Libraries",
        style: "informationLabel",
      },
      {
        text: `${librariesList}`,
        style: "paragraph",
        pageBreak: "after",
      },

      // FORTH PAGE / Timeline, Budgets and Risks + Future Implementations #########################################################################
      { text: `Timeline, Budgets, Risks`, style: "sectionHeader" },

      {
        text: `Timeline`,
        style: "informationLabel",
      },
      { text: `${doc.timeline}`, style: "paragraph" },

      {
        text: `Budgets`,
        style: "informationLabel",
      },
      { text: `${doc.budget}`, style: "paragraph" },

      {
        text: `Risks`,
        style: "informationLabel",
      },
      { text: `${doc.risks}`, style: "paragraph", pageBreak: "after" },

      // FIFTH PAGE / Future Features #########################################################################
      {
        text: `Future features`,
        style: "sectionHeader",
      },
      table(features, featuresHeaders),

      // FIFTH PAGE / Thank you co #########################################################################
      {
        pageBreak: "before",
        text: `Thank you`,
        style: "heading1",
      },
      {
        text: `I'm glad you've choosen SRSGen to provide you with a structure for your next project. \n I wish you a prosperous future on your endeavour.`,
        style: "description",
        marginBottom: 100,
      },
      {
        // if you specify width, svg will scale proportionally
        svg:
          '<svg xmlns="http://www.w3.org/2000/svg" width="152.756" height="31" viewBox="0 0 152.756 31"><defs><style>.a{fill:#414141;}</style></defs><g transform="translate(-103 -19)"><path class="a" d="M-49.811-5.59l3.375-.328a4.117,4.117,0,0,0,1.236,2.5,3.738,3.738,0,0,0,2.514.8,3.863,3.863,0,0,0,2.525-.709,2.109,2.109,0,0,0,.85-1.658,1.564,1.564,0,0,0-.357-1.037,2.857,2.857,0,0,0-1.248-.744q-.609-.211-2.777-.75a9.422,9.422,0,0,1-3.914-1.7,4.47,4.47,0,0,1-1.582-3.457,4.416,4.416,0,0,1,.744-2.455,4.659,4.659,0,0,1,2.145-1.74,8.6,8.6,0,0,1,3.381-.6,7.252,7.252,0,0,1,4.869,1.418,5,5,0,0,1,1.717,3.785l-3.469.152a2.946,2.946,0,0,0-.955-1.9,3.5,3.5,0,0,0-2.2-.58,3.963,3.963,0,0,0-2.367.621,1.252,1.252,0,0,0-.551,1.066,1.32,1.32,0,0,0,.516,1.043,9.119,9.119,0,0,0,3.188,1.148,16.821,16.821,0,0,1,3.744,1.236,4.825,4.825,0,0,1,1.9,1.746A5.107,5.107,0,0,1-35.842-5a5.059,5.059,0,0,1-.82,2.766,4.916,4.916,0,0,1-2.32,1.916A9.73,9.73,0,0,1-42.721.3a7.442,7.442,0,0,1-5-1.506A6.55,6.55,0,0,1-49.811-5.59ZM-32.912,0V-17.18h7.3a12.5,12.5,0,0,1,4,.463,3.948,3.948,0,0,1,2,1.646,4.949,4.949,0,0,1,.75,2.707A4.586,4.586,0,0,1-20-9.17a5.459,5.459,0,0,1-3.4,1.588,8.093,8.093,0,0,1,1.857,1.441,19.58,19.58,0,0,1,1.975,2.789L-17.467,0h-4.148l-2.508-3.738a24.25,24.25,0,0,0-1.828-2.525,2.662,2.662,0,0,0-1.043-.715,5.717,5.717,0,0,0-1.746-.193h-.7V0Zm3.469-9.914h2.566a13.253,13.253,0,0,0,3.117-.211,1.868,1.868,0,0,0,.973-.727,2.237,2.237,0,0,0,.352-1.289,2.06,2.06,0,0,0-.463-1.4,2.124,2.124,0,0,0-1.307-.674q-.422-.059-2.531-.059h-2.707ZM-16.471-5.59l3.375-.328a4.117,4.117,0,0,0,1.236,2.5,3.738,3.738,0,0,0,2.514.8A3.863,3.863,0,0,0-6.82-3.334a2.109,2.109,0,0,0,.85-1.658,1.564,1.564,0,0,0-.357-1.037,2.857,2.857,0,0,0-1.248-.744q-.609-.211-2.777-.75a9.422,9.422,0,0,1-3.914-1.7A4.47,4.47,0,0,1-15.85-12.68a4.416,4.416,0,0,1,.744-2.455,4.659,4.659,0,0,1,2.145-1.74,8.6,8.6,0,0,1,3.381-.6,7.252,7.252,0,0,1,4.869,1.418A5,5,0,0,1-2.994-12.27l-3.469.152a2.946,2.946,0,0,0-.955-1.9,3.5,3.5,0,0,0-2.2-.58,3.963,3.963,0,0,0-2.367.621,1.252,1.252,0,0,0-.551,1.066,1.32,1.32,0,0,0,.516,1.043A9.119,9.119,0,0,0-8.83-10.723,16.821,16.821,0,0,1-5.086-9.486a4.825,4.825,0,0,1,1.9,1.746A5.107,5.107,0,0,1-2.5-5a5.059,5.059,0,0,1-.82,2.766A4.916,4.916,0,0,1-5.643-.322,9.73,9.73,0,0,1-9.381.3a7.442,7.442,0,0,1-5-1.506A6.55,6.55,0,0,1-16.471-5.59ZM8.408-6.316V-9.211h7.477v6.844A9.412,9.412,0,0,1,12.727-.51a11.5,11.5,0,0,1-4.189.8,9.4,9.4,0,0,1-4.7-1.131A7.19,7.19,0,0,1,.826-4.072,10.452,10.452,0,0,1-.182-8.648a9.888,9.888,0,0,1,1.125-4.77,7.577,7.577,0,0,1,3.293-3.2,8.885,8.885,0,0,1,4.113-.855,8.207,8.207,0,0,1,5,1.342,6.059,6.059,0,0,1,2.314,3.709l-3.445.645a3.638,3.638,0,0,0-1.365-2,4.127,4.127,0,0,0-2.5-.732,4.7,4.7,0,0,0-3.615,1.441A6.072,6.072,0,0,0,3.393-8.789,6.726,6.726,0,0,0,4.752-4.2,4.539,4.539,0,0,0,8.314-2.672,5.973,5.973,0,0,0,10.5-3.1a7.49,7.49,0,0,0,1.881-1.037v-2.18ZM19.084,0V-17.18H31.822v2.906h-9.27v3.809h8.625V-7.57H22.553v4.676h9.6V0ZM35.127,0V-17.18H38.5L45.533-5.707V-17.18h3.223V0h-3.48L38.35-11.2V0Z" transform="translate(207 43)"/><g transform="translate(103 19)"><path class="a" d="M11.7,31H3.9A3.892,3.892,0,0,1,0,27.125V3.875A3.892,3.892,0,0,1,3.9,0H15.6l3.9,3.875H35.1A3.892,3.892,0,0,1,39,7.749V19.375H35.1V11.625c0-.084,0-.168,0-.251s0-.163,0-.243c.011-1.258.02-2.345-.562-2.926a1.875,1.875,0,0,0-1.39-.457H17.55l-3.9-3.875h-7.8a1.875,1.875,0,0,0-1.39.457C3.878,4.912,3.887,6,3.9,7.256c0,.08,0,.16,0,.241s0,.168,0,.253V25.186c0,1.8,1.276,1.944,2.943,1.944.148,0,.3,0,.449,0H11.7V31Z"/><g transform="translate(16.855 15.123)"><rect class="a" width="11.293" height="3.764" transform="translate(10.445 12.008)"/><path class="a" d="M8.59,17.468l5.068-5.079L8.59,7.31l1.56-1.56,6.639,6.639L10.15,19.028Z" transform="translate(-8.59 -3.382)"/></g></g></g></svg>',
        width: 150,
      },
    ],
    styles: {
      // Cover page
      heading1: {
        fontSize: 32,
        bold: true,
        margin: [0, 130, 0, 0],
      },
      description: {
        fontSize: 16,
        margin: [0, 16, 60, 0],
      },

      // Sections general
      sectionHeader: {
        fontSize: 24,
        bold: true,
        margin: [0, 160, 0, 16],
      },
      informationLabel: {
        fontSize: 16,
        bold: true,
        margin: [0, 32, 0, 8],
      },
      paragraph: {
        margin: [0, 0, 60, 0],
      },

      // Footer
      footerText: {
        color: "#6c757d",
      },

      link: {
        color: "#007bff",
      },
    },
  };

  pdfMake.createPdf(docDefinition).download(`SRS-${doc.title}`);
}
