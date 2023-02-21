# Cover Letter Writer

### Created by:

Ramón Hernández - Front-End Developer

## Description:

Cover Letter Writer creates general cover letters inserted with the information you add. 

## Problem to be Addressed

When applying for jobs, the longest task is writing a cover letter. This should make the process faster and stress-free.

## General Idea/Purpose

The user enters specific information, which is then inserted into a general cover letter for them to copy and paste

## Audience

Job Seekers looking for a simple way to create a general cover letter.

### Technologies To Be Used

- REACT
- HTML
- CSS
- JAVASCRIPT
- NODE.JS
- BIT.IO
- TAILWIND

## Components Architecture
### Header in every page
![Architecture](https://i.imgur.com/I2DH6LU.png)
### Header in some pages (Header inserted into each page)
![Architecture](https://i.imgur.com/9sDh3wA.png)

## The Route Table
| Route | Element | Loader | Action | Summary |
|-------|---------|--------|--------|---------|
| / | Home | | | Home page will include info and buttons |
| /coverletters | Examples | examplesLoader |  | returns all cover letters |
| /coverletters/:id | Show | ShowLoader |  | returns single cover letter|
| /coverletters/create |  | | CreateAction | creates a cover letter |
| /coverletters/update |  | | UpdateAction | updates a cover letter |
| /coverletters/delete |  | | DeleteAction | deletes a cover letter |


## Trello Board

[TRELLO BOARD](https://trello.com/invite/b/esbEGeom/ATTI68df0cc9bc746e7d60641bed340d00d417916F0A/cover-letter-writer)

## Wire Frames

### Desktop:

![Landing Page](https://i.imgur.com/iboXnxg.png)
![Create Page](https://i.imgur.com/Rtmgj1l.png)
![Index Page](https://i.imgur.com/KUGoUkl.png)

## Link to Project

[Live Page](https://cover-letter-writer.vercel.app/)