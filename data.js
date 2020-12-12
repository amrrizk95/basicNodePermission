const ROLE = {
    ADMIN: 'admin',
    BASIC: 'basic'
  }
  
  module.exports = {
    ROLE: ROLE,
    users: [
      { id: 1, name: 'amr', role: ROLE.ADMIN },
      { id: 2, name: 'salem', role: ROLE.BASIC },
      { id: 3, name: 'rizk', role: ROLE.BASIC }
    ],
    projects: [
      { id: 1, name: "amr's Project", userId: 1 },
      { id: 2, name: "Salem's Project", userId: 2 },
      { id: 3, name: "rizk's Project", userId: 3 }
    ]
  }