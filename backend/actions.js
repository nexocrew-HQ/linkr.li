const { v4: uuidv4 } = require("uuid");
const uuids = uuidv4();

async function getUser(userID) {
  const userDB = require("./database/usersDB");

  const userData = await userDB.findOne({
    UserID: userID,
  });

  return userData;
}

async function createUser(userID, email) {
  const userDB = require("./database/usersDB");

  await userDB.create({
    UserID: userID,
    UUID: uuids,
    Email: email,
    Links: [],
  });
}

async function getLink(link) {
  const linkDB = require("./database/linksDB");

  const linkData = await linkDB.findOne({
    Slug: link,
  });

  return linkData;
}

async function createLink(userID, slug, redirect, uuid) {
  const linkDB = require("./database/linksDB");
  const userDB = require("./database/usersDB");

  await linkDB.create({
    UserID: userID,
    UUID: uuid,
    Slug: slug,
    Redirect: redirect,
  });

  await userDB.findOneAndUpdate(
    {
      UserID: userID,
    },
    {
      $push: {
        Links: uuid,
      },
    }
  );
}

async function deleteLink(userID, slug) {
  const linkDB = require("./database/linksDB");
  const userDB = require("./database/usersDB");

  const linkData = await linkDB.findOne({
    Slug: slug,
  });

  await linkDB.findOneAndDelete({
    Slug: slug,
  });

  await userDB.findOneAndUpdate(
    {
      UserID: userID,
    },
    {
      $pull: {
        Links: linkData.UUID,
      },
    }
  );
}

async function getLinks(userID) {
  const userDB = require("./database/usersDB");
  const linkDB = require("./database/linksDB");

  const userData = await userDB.findOne({
    UserID: userID,
  });

  const links = userData.Links;

  const linksData = await linkDB.find({
    UUID: {
      $in: links,
    },
  });

  return linksData;
}

async function createSession(userID) {
  const sessionDB = require("./database/sessionDB");

  await sessionDB.create({
    UserID: userID,
    UUID: uuids,
    CreatedAt: Date.now(),
  });
}

async function getSession(sessionID) {
  const sessionDB = require("./database/sessionDB");

  const sessionData = await sessionDB.findOne({
    UUID: sessionID,
  });

  return sessionData;
}

async function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
}

async function checkAuth() {
  const sessionID = getCookie("sessionID");
  if (!sessionID) {
    return null;
  }

  const sessionData = await getSession(sessionID);
  return sessionData;
}

export {
  getUser,
  createUser,
  getLink,
  createLink,
  deleteLink,
  getLinks,
  createSession,
  getSession,
  getCookie,
  checkAuth,
};
