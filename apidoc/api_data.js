define({ "api": [
  {
    "type": "post",
    "url": "/create/:id",
    "title": "Create a new document",
    "name": "Create_New_Documents",
    "group": "Documents",
    "version": "0.1.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>True for deletion</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Message confirming the success</p>"
          }
        ]
      }
    },
    "filename": "server/controllers/documentController/documentController.js",
    "groupTitle": "Documents"
  },
  {
    "type": "delete",
    "url": "/delete/:id",
    "title": "Delete specific document",
    "name": "DeleteDocument",
    "group": "Documents",
    "version": "0.1.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>True for deletion</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Message confirming the success</p>"
          }
        ]
      }
    },
    "filename": "server/controllers/documentController/documentController.js",
    "groupTitle": "Documents"
  },
  {
    "type": "get",
    "url": "/read/:id",
    "title": "Request Document information",
    "name": "GetDocument",
    "group": "Documents",
    "version": "0.5.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Document ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "creator_id",
            "description": "<p>ID of the creator of the specific document</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of the document</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description of the document</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "goals",
            "description": "<p>Goals of the project</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "problems",
            "description": "<p>Problems the project will solve</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "vision",
            "description": "<p>Vision of the project</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "userStories",
            "description": "<p>List of user stories (Array of Objects)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userStories.id",
            "description": "<p>Story ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userStories.who",
            "description": "<p>The agent of the story</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userStories.wants",
            "description": "<p>The desire of the agent</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userStories.objective",
            "description": "<p>The objective of the agent</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "pages",
            "description": "<p>List of pages (Array of Objects)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "pages.id",
            "description": "<p>Page ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "pages.name",
            "description": "<p>Name of the page</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "pages.description",
            "description": "<p>Description of the page</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "backend",
            "description": "<p>List of Backend technology (Array of Objects)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "backend.id",
            "description": "<p>Backend ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "backend.description",
            "description": "<p>Backend description</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "frontend",
            "description": "<p>List of Frontend technology (Array of Objects)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "frontend.id",
            "description": "<p>Frontend ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "frontend.description",
            "description": "<p>Frontend description</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "security",
            "description": "<p>List of Security technology (Array of Objects)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "security.id",
            "description": "<p>Security ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "security.description",
            "description": "<p>Security description</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "libraries",
            "description": "<p>List of Libraries technology (Array of Objects)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "libraries.id",
            "description": "<p>Libraries ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "libraries.description",
            "description": "<p>Libraries description</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "timeline",
            "description": "<p>Project timeline</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "budget",
            "description": "<p>Project budget</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "risks",
            "description": "<p>Project risks</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "features",
            "description": "<p>List of features (Array of Objects)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "features.id",
            "description": "<p>Page ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "features.name",
            "description": "<p>Name of the feature</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "features.description",
            "description": "<p>Description of the feature</p>"
          }
        ]
      }
    },
    "filename": "server/controllers/documentController/documentController.js",
    "groupTitle": "Documents"
  },
  {
    "type": "get",
    "url": "/read/:id",
    "title": "Request Document information",
    "name": "GetDocument",
    "group": "Documents",
    "version": "0.4.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of the document</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description of the document</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "goals",
            "description": "<p>Goals of the project</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "problems",
            "description": "<p>Problems the project will solve</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "vision",
            "description": "<p>Vision of the project</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "userStories",
            "description": "<p>List of user stories (Array of Objects)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userStories.id",
            "description": "<p>Story ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userStories.who",
            "description": "<p>The agent of the story</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userStories.wants",
            "description": "<p>The desire of the agent</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userStories.objective",
            "description": "<p>The objective of the agent</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "pages",
            "description": "<p>List of pages (Array of Objects)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "pages.id",
            "description": "<p>Page ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "pages.name",
            "description": "<p>Name of the page</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "pages.description",
            "description": "<p>Description of the page</p>"
          }
        ]
      }
    },
    "filename": "server/controllers/documentController/_apidoc.js",
    "groupTitle": "Documents"
  },
  {
    "type": "get",
    "url": "/read/:id",
    "title": "Request Document information",
    "name": "GetDocument",
    "group": "Documents",
    "version": "0.3.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of the document</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description of the document</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "goals",
            "description": "<p>Goals of the project</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "problems",
            "description": "<p>Problems the project will solve</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "vision",
            "description": "<p>Vision of the project</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "userStories",
            "description": "<p>List of user stories (Array of Objects)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userStories.id",
            "description": "<p>Story ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userStories.who",
            "description": "<p>The agent of the story</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userStories.wants",
            "description": "<p>The desire of the agent</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userStories.objective",
            "description": "<p>The objective of the agent</p>"
          }
        ]
      }
    },
    "filename": "server/controllers/documentController/_apidoc.js",
    "groupTitle": "Documents"
  },
  {
    "type": "get",
    "url": "/read/:id",
    "title": "Request Document information",
    "name": "GetDocument",
    "group": "Documents",
    "version": "0.2.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of the document</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description of the document</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "goals",
            "description": "<p>Goals of the project</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "problems",
            "description": "<p>Problems the project will solve</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "vision",
            "description": "<p>Vision of the project</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "userStories",
            "description": "<p>List of user stories (Array of Objects)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userStories.id",
            "description": "<p>Story ID</p>"
          }
        ]
      }
    },
    "filename": "server/controllers/documentController/_apidoc.js",
    "groupTitle": "Documents"
  },
  {
    "type": "get",
    "url": "/read/:id",
    "title": "Request Document information",
    "name": "GetDocument",
    "group": "Documents",
    "version": "0.1.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of the document</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success:",
          "content": "{\n title: \"New document\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "server/controllers/documentController/_apidoc.js",
    "groupTitle": "Documents"
  },
  {
    "type": "get",
    "url": "/listing/:id",
    "title": "Request User specific documents",
    "name": "Get_User_Documents",
    "group": "Documents",
    "version": "0.1.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "array",
            "description": "<p>The documents from the user with the :id.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success:",
          "content": "list: [{id: \"1\", name: \"Document Name\", description: \"Document Description\"}]",
          "type": "json"
        }
      ]
    },
    "filename": "server/controllers/documentController/documentController.js",
    "groupTitle": "Documents"
  },
  {
    "type": "post",
    "url": "/update/:id",
    "title": "Update specific document",
    "name": "UpdateDocument",
    "group": "Documents",
    "version": "0.2.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "documentObject",
            "description": "<p>The object with the document data</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Message confirming the success</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ProjectDoesntExist",
            "description": "<p>The request body is either empty or the id doesn't exist.</p>"
          }
        ]
      }
    },
    "filename": "server/controllers/documentController/documentController.js",
    "groupTitle": "Documents"
  },
  {
    "type": "post",
    "url": "/update/:id",
    "title": "Update specific document",
    "name": "UpdateDocument",
    "group": "Documents",
    "version": "0.1.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Message confirming the success</p>"
          }
        ]
      }
    },
    "filename": "server/controllers/documentController/_apidoc.js",
    "groupTitle": "Documents"
  },
  {
    "type": "post",
    "url": "/login/:id",
    "title": "Request User information",
    "name": "GetUser",
    "group": "User",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Users unique email</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>First name of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>Last name of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>JWT token.</p>"
          }
        ]
      }
    },
    "filename": "server/controllers/authController/authController.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/register",
    "title": "Register a new User.",
    "name": "RegisterUser",
    "group": "User",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Users registered email</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>First name of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>Last name of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the User.</p>"
          }
        ]
      }
    },
    "filename": "server/controllers/userController.js",
    "groupTitle": "User"
  }
] });
