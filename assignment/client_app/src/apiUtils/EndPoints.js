const defaults = {
  methods: {
    GET: "GET",
    POST: "POST",
    PUT: "PUT",
    DELETE: "DELETE",
  },
  versions: {
    v1: {
      version: "/api",
    },
  },
};

const endPoints = {
  // auth endpoints
  users: {
    method: "GET",
    // ...defaults.versions.v1,
    uri: "/user/all",
    headerProps: {},
  },
  register: {
    method: "POST",
    // ...defaults.versions.v1,
    uri: "/user/new",
    // headerProps: {},
  },

  edit: {
    method: "POST",
    // ...defaults.versions.v1,
    uri: "/user/:id",
    // headerProps: {},
  },

  delete: {
    method: "DELETE",
    // ...defaults.versions.v1,
    uri: "/user/:id",
    headerProps: {},
  },
};

export default endPoints;
