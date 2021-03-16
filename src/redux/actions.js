/* eslint-disable import/no-cycle */
/* SETTINGS */
export const CHANGE_LOCALE = "CHANGE_LOCALE";

/* AUTH */
export const LOGIN_USER = "LOGIN_USER";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_ERROR = "LOGIN_USER_ERROR";
export const REGISTER_USER = "REGISTER_USER";
export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
export const REGISTER_USER_ERROR = "REGISTER_USER_ERROR";
export const LOGOUT_USER = "LOGOUT_USER";
export const FORGOT_PASSWORD = "FORGOT_PASSWORD";
export const FORGOT_PASSWORD_SUCCESS = "FORGOT_PASSWORD_SUCCESS";
export const FORGOT_PASSWORD_ERROR = "FORGOT_PASSWORD_ERROR";
export const RESET_PASSWORD = "RESET_PASSWORD";
export const RESET_PASSWORD_SUCCESS = "RESET_PASSWORD_SUCCESS";
export const RESET_PASSWORD_ERROR = "RESET_PASSWORD_ERROR";

/* MENU */
export const MENU_SET_CLASSNAMES = "MENU_SET_CLASSNAMES";
export const MENU_CONTAINER_ADD_CLASSNAME = "MENU_CONTAINER_ADD_CLASSNAME";
export const MENU_CLICK_MOBILE_MENU = "MENU_CLICK_MOBILE_MENU";
export const MENU_CHANGE_DEFAULT_CLASSES = "MENU_CHANGE_DEFAULT_CLASSES";
export const MENU_CHANGE_HAS_SUB_ITEM_STATUS =
  "MENU_CHANGE_HAS_SUB_ITEM_STATUS";

/* TODOAPP */
export const TODO_GET_LIST = "TODO_GET_LIST";
export const TODO_GET_LIST_SUCCESS = "TODO_GET_LIST_SUCCESS";
export const TODO_GET_LIST_ERROR = "TODO_GET_LIST_ERROR";
export const TODO_GET_LIST_WITH_FILTER = "TODO_GET_LIST_WITH_FILTER";
export const TODO_GET_LIST_WITH_ORDER = "TODO_GET_LIST_WITH_ORDER";
export const TODO_GET_LIST_SEARCH = "TODO_GET_LIST_SEARCH";
export const TODO_ADD_ITEM = "TODO_ADD_ITEM";
export const TODO_ADD_ITEM_SUCCESS = "TODO_ADD_ITEM_SUCCESS";
export const TODO_ADD_ITEM_ERROR = "TODO_ADD_ITEM_ERROR";
export const TODO_SELECTED_ITEMS_CHANGE = "TODO_SELECTED_ITEMS_CHANGE";

/* CHAT APP */
export const CHAT_GET_CONTACTS = "CHAT_GET_CONTACTS";
export const CHAT_GET_CONTACTS_SUCCESS = "CHAT_GET_CONTACTS_SUCCESS";
export const CHAT_GET_CONTACTS_ERROR = "CHAT_GET_CONTACTS_ERROR";
export const CHAT_GET_CONVERSATIONS = "CHAT_GET_CONVERSATIONS";
export const CHAT_GET_CONVERSATIONS_SUCCESS = "CHAT_GET_CONVERSATIONS_SUCCESS";
export const CHAT_GET_CONVERSATIONS_ERROR = "CHAT_GET_CONVERSATIONS_ERROR";
export const CHAT_ADD_MESSAGE_TO_CONVERSATION =
  "CHAT_ADD_MESSAGE_TO_CONVERSATION";
export const CHAT_CREATE_CONVERSATION = "CHAT_CREATE_CONVERSATION";
export const CHAT_SEARCH_CONTACT = "CHAT_SEARCH_CONTACT";
export const CHAT_CHANGE_CONVERSATION = "CHAT_CHANGE_CONVERSATION";

/* SURVEY LIST APP */
export const SURVEY_LIST_GET_LIST = "SURVEY_LIST_GET_LIST";
export const SURVEY_LIST_GET_LIST_SUCCESS = "SURVEY_LIST_GET_LIST_SUCCESS";
export const SURVEY_LIST_GET_LIST_ERROR = "SURVEY_LIST_GET_LIST_ERROR";
export const SURVEY_LIST_GET_LIST_WITH_FILTER =
  "SURVEY_LIST_GET_LIST_WITH_FILTER";
export const SURVEY_LIST_GET_LIST_WITH_ORDER =
  "SURVEY_LIST_GET_LIST_WITH_ORDER";
export const SURVEY_LIST_GET_LIST_SEARCH = "SURVEY_LIST_GET_LIST_SEARCH";
export const SURVEY_LIST_ADD_ITEM = "SURVEY_LIST_ADD_ITEM";
export const SURVEY_LIST_ADD_ITEM_SUCCESS = "SURVEY_LIST_ADD_ITEM_SUCCESS";
export const SURVEY_LIST_ADD_ITEM_ERROR = "SURVEY_LIST_ADD_ITEM_ERROR";
export const SURVEY_LIST_SELECTED_ITEMS_CHANGE =
  "SURVEY_LIST_SELECTED_ITEMS_CHANGE";

/* SURVEY DETAIL APP */
export const SURVEY_GET_DETAILS = "SURVEY_GET_DETAILS";
export const SURVEY_GET_DETAILS_SUCCESS = "SURVEY_GET_DETAILS_SUCCESS";
export const SURVEY_GET_DETAILS_ERROR = "SURVEY_GET_DETAILS_ERROR";
export const SURVEY_DELETE_QUESTION = "SURVEY_DELETE_QUESTION";
export const SURVEY_SAVE = "SURVEY_SAVE";

export const SUBMIT_NEW_MODEL_REQUEST = "SUBMIT_NEW_MODEL_REQUEST";
export const SUBMIT_NEW_MODEL_SUCCESS = "SUBMIT_NEW_MODEL_SUCCESS";
export const SUBMIT_NEW_MODEL_ERROR = "SUBMIT_NEW_MODEL_ERROR";

export const DELETE_MODEL_REQUEST = "DELETE_MODEL_REQUEST";
export const DELETE_MODEL_SUCCESS = "DELETE_MODEL_SUCCESS";
export const DELETE_MODEL_ERROR = "DELETE_MODEL_ERROR";

export const PUBLISH_MODEL_REQUEST = "PUBLISH_MODEL_REQUEST";
export const PUBLISH_MODEL_SUCCESS = "PUBLISH_MODEL_SUCCESS";
export const PUBLISH_MODEL_ERROR = "PUBLISH_MODEL_ERROR";

export const UPDATE_CURRICULUM_REQUEST = "UPDATE_CURRICULUM_REQUEST";
export const UPDATE_CURRICULUM_SUCCESS = "UPDATE_CURRICULUM_SUCCESS";
export const UPDATE_CURRICULUM_ERROR = "UPDATE_CURRICULUM_ERROR";

export const GET_MODEL_BY_ID_REQUEST = "GET_MODEL_BY_ID_REQUEST";
export const GET_MODEL_BY_ID_SUCCESS = "GET_MODEL_BY_ID_SUCCESS";
export const GET_MODEL_BY_ID_ERROR = "GET_MODEL_BY_ID_ERROR";

export const UPDATE_MODEL_REQUEST = "UPDATE_MODEL_REQUEST";
export const UPDATE_MODEL_SUCCESS = "UPDATE_MODEL_SUCCESS";
export const UPDATE_MODEL_ERROR = "UPDATE_MODEL_ERROR";

export const SUBMIT_NEW_SCHOOL_REQUEST = "SUBMIT_NEW_SCHOOL_REQUEST";
export const SUBMIT_NEW_SCHOOL_SUCCESS = "SUBMIT_NEW_SCHOOL_SUCCESS";
export const SUBMIT_NEW_SCHOOL_ERROR = "SUBMIT_NEW_SCHOOL_ERROR";

export const DELETE_SCHOOL_REQUEST = "DELETE_SCHOOL_REQUEST";
export const DELETE_SCHOOL_SUCCESS = "DELETE_SCHOOL_SUCCESS";
export const DELETE_SCHOOL_ERROR = "DELETE_SCHOOL_ERROR";

export const UPDATE_SCHOOL_REQUEST = "UPDATE_SCHOOL_REQUEST";
export const UPDATE_SCHOOL_SUCCESS = "UPDATE_SCHOOL_SUCCESS";
export const UPDATE_SCHOOL_ERROR = "UPDATE_SCHOOL_ERROR";

export const UPDATE_USER_REQUEST = "UPDATE_USER_REQUEST";
export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";
export const UPDATE_USER_ERROR = "UPDATE_USER_ERROR";

export * from "./menu/actions";
export * from "./settings/actions";
export * from "./auth/actions";
export * from "./todo/actions";
export * from "./surveyList/actions";
export * from "./surveyDetail/actions";

export * from "./school/actions";
