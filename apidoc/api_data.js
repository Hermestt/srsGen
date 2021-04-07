define({ "api": [
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
            "type": "Object",
            "optional": false,
            "field": "object",
            "description": "<p>The document object.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success:",
          "content": "{\n title: \"New project\",\n description: \"This project is meant for learning\",\n goals: \"Learn about project development\",\n problems: \"The editors don't have music integrated\",\n vision: \"Make music out of code\",\n userStories: [\n   {id: \"1\", who: \"Musician\", wants: \"code\", objective: \"make code music\"}\n ],\n backend: [\n    {id: \"1\", description: \"Node.js\"}\n ],\n frontend: [\n    {id: \"1\", description: \"React\"}\n ]",
          "type": "json"
        }
      ]
    },
    "filename": "server/controllers/documentController.js",
    "groupTitle": "Documents"
  },
  {
    "type": "get",
    "url": "/listing/:id",
    "title": "Request User specific documents",
    "name": "Get_User_Documents",
    "group": "Documents",
    "version": "0.2.0",
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
          "content": "list: [\n    { _id: \"606a2959b9581a2960d1295f\", title: \"test\", description: \"\" }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "server/controllers/documentController.js",
    "groupTitle": "Documents"
  }
] });
