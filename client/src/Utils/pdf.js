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
      layout: "lightHorizontalLines",
    };
  }

  var docDefinition = {
    pageSize: "A4",
    // [left, top, right, bottom] or [horizontal, vertical] or just a number for equal margins
    pageMargins: [40, 60, 40, 60],

    content: [
      // FIRST PAGE (Title and Description) #########################################################################
      {
        stack: [
          `${doc.title}`,
          {
            text: `${doc.description}`,
            style: "subheader",
          },
        ],
        style: "heading1",
      },
      {
        text: [
          "Document generated by ",
          {
            text: "SRSGEN",
            link: "https://srsgen.netlify.app/",
            color: "blue",
          },
        ],
        style: ["quote", "small"],
        pageBreak: "after",
      },
      // SECOND PAGE (Goals and Description) #########################################################################
      { text: `Goals and Description`, style: "heading2" },

      {
        text: `What is the goal of the project?`,
        style: "subheader",
      },
      { text: `${doc.goals}`, style: "paragraph" },

      {
        text: `What problems does the project solve?`,
        style: "subheader",
      },
      { text: `${doc.problems}`, style: "paragraph" },

      {
        text: `What is the vision?`,
        style: "subheader",
      },
      { text: `${doc.vision}`, style: "paragraph", pageBreak: "after" },

      // THIRD PAGE / USER STORIES (Stories, pages and Non Functional Requirements) #########################################################################
      { text: `User Stories`, style: "heading2" },

      {
        text: `User stories`,
        style: "subheader",
      },
      table(stories, storiesHeaders),
      {
        text: `Pages`,
        style: "subheader",
        margin: [0, 30, 0, 8],
      },
      table(pages, pagesHeaders),
      {
        text: `Non-Functional Requirements`,
        style: "heading2",
        margin: [0, 30, 0, 8],
      },
      {
        text: "Backend",
        style: "subheader",
      },
      {
        text: `${backendList}`,
        style: "paragraph",
      },
      {
        text: "Frontend",
        style: "subheader",
      },
      {
        text: `${frontendList}`,
        style: "paragraph",
      },
      {
        text: "Security",
        style: "subheader",
      },
      {
        text: `${securityList}`,
        style: "paragraph",
      },
      {
        text: "Libraries",
        style: "subheader",
      },
      {
        text: `${librariesList}`,
        style: "paragraph",
        pageBreak: "after",
      },

      // FORTH PAGE / Timeline, Budgets and Risks + Future Implementations #########################################################################
      { text: `Timeline, Budgets, Risks`, style: "heading2" },

      {
        text: `Timeline`,
        style: "subheader",
      },
      { text: `${doc.timeline}`, style: "paragraph" },

      {
        text: `Budgets`,
        style: "subheader",
      },
      { text: `${doc.budget}`, style: "paragraph" },

      {
        text: `Risks`,
        style: "subheader",
      },
      { text: `${doc.risks}`, style: "paragraph" },

      {
        text: `Future Implementations`,
        style: "heading2",
      },
      table(features, featuresHeaders),

      // FIFTH PAGE / Thank you co #########################################################################
    ],
    styles: {
      heading1: {
        fontSize: 32,
        bold: true,
        margin: [0, 130, 0, 10],
      },
      subheader: {
        fontSize: 14,
        bold: true,
        margin: [0, 0, 0, 8],
      },
      superMargin: {
        margin: [0, 0, 40, 0],
        fontSize: 15,
      },
      heading2: {
        fontSize: 18,
        bold: true,
        margin: [0, 0, 0, 30],
      },
      quote: {
        italics: true,
        margin: [0, 30, 0, 0],
      },
      small: {
        fontSize: 8,
      },
      paragraph: {
        margin: [0, 0, 0, 24],
      },
      tableHeader: {
        bold: true,
      },
    },
  };

  pdfMake.createPdf(docDefinition).download(`SRS-${doc.title}`);
}
