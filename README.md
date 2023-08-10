# Note Registration API

Welcome to the Note Registration API documentation. This API provides a comprehensive solution for managing your notes efficiently. Whether you're registering users, notes, tags, or links, this API has you covered.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Usage](#usage)

## Introduction

The Note Registration API offers a robust foundation for your note registration project. Designed to meet the needs of front-end development teams, it provides an array of well-organized routes and functionalities. From user registration with token-based authentication to note registration accompanied by tags and links, this API streamlines the process. The implementation includes thorough testing using the JEST framework, ensuring the integrity of the codebase. Its architecture is built with dependency inversion, empowering the enforcement of business rules and the flexibility to adapt the database as needed.

## Features

### User Management:
- **POST** - `/users/` - Register a new user
- **PUT** - `/users/` - Update user information
- **PATCH** - `/users/avatar` - Update user avatar

Example **POST** request:
```json
{
	"name": "User Test",
	"email": "test@test.com",
	"password": "1234"
}
```

### User Sessions:
- **POST** - `/sessions/` - Create a user session

Example **POST** request:
```json
{
	"email": "test@test.com",
	"password": "1234"
}
```

### Notes:
- **GET** - `/notes?title&tags` - Retrieve a list of all notes
- **GET** - `/notes/:id` - Retrieve a specific note
- **POST** - `/notes/` - Create a new note
- **DELETE** - `/notes/:id` - Delete a note

Example **POST** request:
```json
{
    "title": "Introduction to Python",
    "description": "This is a Python note",
    "tags": ["Python", "django"],
    "links": ["link1", "link2"]
}
```

### Tags:
- **GET** - `/tags/` - Get a list of all available tags

## Usage

To get started, refer to the respective endpoints for user management, user sessions, note creation, retrieval, and deletion, as well as tag retrieval. Make sure to provide valid JSON payloads in your requests.


Feel free to reach out with any questions or feedback.