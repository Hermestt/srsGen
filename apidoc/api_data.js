define({ "api": [
  {
    "type": "post",
    "url": "/create/:id",
    "title": "Create a new document",
    "name": "Create_New_Documents",
    "group": "Documents",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "document",
            "description": "<p>Document with user Input</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>True</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Message confirming the success</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"success\": true,\n  \"message\": \"Document was created\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"message\": \"Incorrect email or password, please try again.\"\n}",
          "type": "json"
        },
        {
          "title": "Forbidden",
          "content": "HTTP/1.1 403 Forbidden",
          "type": "json"
        }
      ]
    },
    "filename": "server/routes/documentRouter.js",
    "groupTitle": "Documents"
  },
  {
    "type": "delete",
    "url": "/delete/:id",
    "title": "Delete existing document",
    "name": "Delete_document",
    "group": "Documents",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Document ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>True</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Message confirming the success</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"success\": true,\n  \"message\": \"Document successfully deleted\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"message\": \"Incorrect email or password, please try again.\"\n}",
          "type": "json"
        },
        {
          "title": "Forbidden",
          "content": "HTTP/1.1 403 Forbidden",
          "type": "json"
        }
      ]
    },
    "filename": "server/routes/documentRouter.js",
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
            "type": "Array",
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
            "type": "Array",
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
            "type": "Array",
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
            "type": "Array",
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
            "type": "Array",
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
            "type": "Array",
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
            "type": "Array",
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
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\ndocument: {\n    \"_id\": 1,\n    \"creator_id\": 1,\n    \"title\": \"Document name\",\n    \"description\": \"Document description lorem ipsum sit amet dolore\",\n    \"goals\": \"Goals of the project\",\n    \"problems\": \"Problems the project will solve\",\n    \"vision\": \"Vision of the good the project will bring\",\n    \"userStories\": [{\n        \"id\": 1,\n        \"who\": \"developer\",\n        \"wants\": \"good documentation\",\n        \"objective\": \"write error free requests\"\n     }],\n    \"pages\": [{\n        \"id\": 1,\n        \"name\": \"Login\",\n        \"description\": \"form for user authentication\"\n    }],\n    \"backend\": [{\n        \"id\": 1,\n        \"description\": \"node.js\"\n    }],\n    \"frontend\": [{\n        \"id\": 1,\n        \"description\": \"ReactJS\"\n    }],\n    \"security\": [{\n        \"id\": 1,\n        \"description\": \"JWT\"\n    }],\n    \"libraries\": [{\n        \"id\": 1,\n        \"description\": \"Axios\"\n    }],\n    \"timeline\": \"2 weeks\",\n    \"budget\": \"3 meals and 2 snacks/day, water, coffee and time\",\n    \"risks\": \"Burn baby burn\"\n    \"features\": [{\n        \"id\": 1,\n        \"name\": \"Sharable documents\",\n        \"description\": \"share documents with a url to anonymous users or registered users\"\n    }]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"message\": \"Incorrect email or password, please try again.\"\n}",
          "type": "json"
        },
        {
          "title": "Forbidden",
          "content": "HTTP/1.1 403 Forbidden",
          "type": "json"
        },
        {
          "title": "Document doesn't exist",
          "content": "HTTP/1.1 200 OK\n{\n  \"success\": false,\n  \"message\": \"Document doesn't exist\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "server/routes/documentRouter.js",
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
          "title": "Success",
          "content": "HTTP/1.1 200 OK\nlist: [{id: \"1\", name: \"Document Name\", description: \"Document Description\"}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"message\": \"Incorrect email or password, please try again.\"\n}",
          "type": "json"
        },
        {
          "title": "Forbidden",
          "content": "HTTP/1.1 403 Forbidden",
          "type": "json"
        }
      ]
    },
    "filename": "server/routes/documentRouter.js",
    "groupTitle": "Documents"
  },
  {
    "type": "put",
    "url": "/update/:id",
    "title": "Update existing document",
    "name": "Update_document",
    "group": "Documents",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "document",
            "description": "<p>Document with user Input</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"success\": true,\n     \"message\": \"Document successfully updated\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"message\": \"Incorrect email or password, please try again.\"\n}",
          "type": "json"
        },
        {
          "title": "Forbidden",
          "content": "HTTP/1.1 403 Forbidden",
          "type": "json"
        },
        {
          "title": "Empty body",
          "content": "HTTP/1.1 400 Bad Request\n {\n     \"success\": false,\n     \"message\": \"You must provide data\"\n }",
          "type": "json"
        },
        {
          "title": "Server Error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "filename": "server/routes/documentRouter.js",
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
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"userData\": {\n        \"id\": 1,\n        \"firstName\": \"Pedro\",\n        \"lastName\": \"Oliveira\",\n        \"email\": \"pedro@exampleemail.com\"\n    },\n    \"token\": \"xxx.yyy.zzz\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Server Error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        },
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"message\": \"Incorrect email or password, please try again.\"\n}",
          "type": "json"
        },
        {
          "title": "Empty body",
          "content": "HTTP/1.1 400 Bad Request\n {\n     \"success\": false,\n     \"message\": \"You must provide data\"\n }",
          "type": "json"
        }
      ]
    },
    "filename": "server/routes/authRouter.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/register",
    "title": "Register a new User.",
    "name": "Register_user",
    "group": "User",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>User first name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>User last name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User email.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User password.</p>"
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
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n    \"id\": 1,\n    \"firstName\": \"Pedro\",\n    \"lastName\": \"Oliveira\",\n    \"email\": \"pedro@exampleemail.com\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Server Error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        },
        {
          "title": "Empty body",
          "content": "HTTP/1.1 400 Bad Request\n {\n     \"success\": false,\n     \"message\": \"You must provide data\"\n }",
          "type": "json"
        }
      ]
    },
    "filename": "server/routes/userRouter.js",
    "groupTitle": "User"
  }
] });
