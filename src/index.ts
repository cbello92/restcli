const workspace = {
  _id: '1',
  name: 'workspace',
};

const context_enviroment = [
  {
    _id: '1',
    name: 'dev',
  },
  {
    _id: '2',
    name: 'qa',
  },
  {
    _id: '3',
    name: 'prod',
  },
];

const environment = [
  {
    _id: '1',
    name: 'BASE_PATH_API_POKEMON',
    context_enviroment: [
      {
        _id: '1',
        name: 'dev',
        value: 'https://pokeapi.dev.co/api/v2/pokemon',
      },
      {
        _id: '2',
        name: 'qa',
        value: 'https://pokeapi.qa.co/api/v2/pokemon',
      },
      {
        _id: '3',
        name: 'prod',
        value: 'https://pokeapi.prod.co/api/v2/pokemon',
      },
    ],
  },
];

const endpoint_resource = [
  {
    _id: '1',
    workspace: '1',
    name: 'pokemon',
    basepath: '{{BASE_PATH_API_POKEMON}}',
    endpoints: [
      {
        path: '/pokemon',
        method: 'GET',
        headers: [
          {
            name: 'Authorization',
            value: 'aaaaa',
          },
        ],
        query_params: [
          {
            name: 'limit',
            value: '10',
          },
        ],
      },
    ],
  },
];
