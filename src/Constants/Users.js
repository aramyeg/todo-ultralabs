// This is mutated during app runtime

export const USERS = [
  {
    userId: 1,
    firstName : "Peter",
    lastName : "Bishop",
    completionRate : '14',
    todoList : [
      {
        todoId : 1,
        description : "Open portal to the parallel universe",
        complete : false
      },
      {
        todoId : 2,
        description : "Crossover to parallel universe to save Peter",
        complete : true
      },
      {
        todoId : 3,
        description : "Experiment with \"Cortexiphan\"",
        complete : false
      },
      {
        todoId : 4,
        description : "Experiment with something else",
        complete : false
      },
    ],
  },
  {
    userId: 2,
    firstName : "Olivia",
    lastName : "Dunham",
    completionRate : '62',
    todoList : [
      {
        todoId : 1,
        description : "Open portal to the parallel universe",
        complete : false
      },
      {
        todoId : 2,
        description : "Open portal to the parallel universe",
        complete : false
      }
    ],
  },
  {
    userId: 3,
    firstName : "William",
    lastName : "Bell",
    completionRate : '14',
    todoList : [],
  }
];