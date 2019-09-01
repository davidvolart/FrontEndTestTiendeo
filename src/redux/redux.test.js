import Actions from './action'
import reducer from './reducer'

describe('actions', () => {
    it('should create an action to add a target', () => {
        const target = {
            title:'Titulo',
            description:'Descripción',
            url:'https://cdnmundo1.img.sputniknews.com/images/108836/43/1088364306.jpg' 
        }
      const expectedAction = {
        type: Actions.Types.CREATE_ITEM,
        payload: target
      }
      expect(Actions.createItem(target)).toEqual(expectedAction)
    })

    it('should create an action to delete a target', () => {
        const id = 1
        const expectedAction = {
          type: Actions.Types.DELETE_ITEM,
          payload: id
        }
        expect(Actions.deleteItem(id)).toEqual(expectedAction)
    })

    it('should create an action to update a target', () => {
        const target = {
            title:'Titulo',
            description:'Descripción',
            url:'https://cdnmundo1.img.sputniknews.com/images/108836/43/1088364306.jpg' 
        }

        const expectedAction = {
          type: Actions.Types.DELETE_ITEM,
          payload: target
        }
        expect(Actions.deleteItem(target)).toEqual(expectedAction)
    })
})

describe('reducer', () => {

    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual([]);
    })

    it('should handle CREATE_ITEM', () => {

        const target = {
            title:'Titulo',
            description:'Descripción',
            url:'https://cdnmundo1.img.sputniknews.com/images/108836/43/1088364306.jpg' 
        }

        expect(
            reducer([], {
              type: Actions.Types.CREATE_ITEM,
              payload: target
            })
          ).toEqual([
            {
                id: 1,
                title:'Titulo',
                description:'Descripción',
                url:'https://cdnmundo1.img.sputniknews.com/images/108836/43/1088364306.jpg' 
            }
          ])


          expect(
            reducer([
                {
                    id: 0,
                    title: 'Titulo 1',
                    description: 'Descripcion 1',
                    url: 'https://cdnmundo1.img.sputniknews.com/images/108836/43/1088364306.jpg',
                }
              ], {
              type: Actions.Types.CREATE_ITEM,
              payload: target
            })
          ).toEqual([
            {
                id: 0,
                title: 'Titulo 1',
                description: 'Descripcion 1',
                url: 'https://cdnmundo1.img.sputniknews.com/images/108836/43/1088364306.jpg',
            },
            {
                id: 1,
                title:'Titulo',
                description:'Descripción',
                url:'https://cdnmundo1.img.sputniknews.com/images/108836/43/1088364306.jpg' 
            }
          ])

          expect(
            reducer([
                {
                    id: 1,
                    title: 'Titulo 1',
                    description: 'Descripcion 1',
                    url: 'https://cdnmundo1.img.sputniknews.com/images/108836/43/1088364306.jpg',
                },
                {
                    id: 3,
                    title: 'Titulo 3',
                    description: 'Descripcion 3',
                    url: 'https://cdnmundo1.img.sputniknews.com/images/108836/43/1088364306.jpg',
                }
              ], {
              type: Actions.Types.CREATE_ITEM,
              payload: target
            })
          ).toEqual([
            {
                id: 1,
                title: 'Titulo 1',
                description: 'Descripcion 1',
                url: 'https://cdnmundo1.img.sputniknews.com/images/108836/43/1088364306.jpg',
            },
            {
                id: 3,
                title: 'Titulo 3',
                description: 'Descripcion 3',
                url: 'https://cdnmundo1.img.sputniknews.com/images/108836/43/1088364306.jpg',
            },
            {
                id: 4,
                title:'Titulo',
                description:'Descripción',
                url:'https://cdnmundo1.img.sputniknews.com/images/108836/43/1088364306.jpg' 
            }
          ])
    })



    it('should handle DELETE_ITEM', () => {

        expect(
            reducer([], {
              type: Actions.Types.DELETE_ITEM,
              payload: 5
            })
        ).toEqual([])

        expect(
            reducer([
                {
                    id: 1,
                    title: 'Titulo 1',
                    description: 'Descripcion 1',
                    url: 'https://cdnmundo1.img.sputniknews.com/images/108836/43/1088364306.jpg',
                }
            ], {
              type: Actions.Types.DELETE_ITEM,
              payload: 1
            })
        ).toEqual([])


        expect(
            reducer([
                {
                    id: 1,
                    title: 'Titulo 1',
                    description: 'Descripcion 1',
                    url: 'https://cdnmundo1.img.sputniknews.com/images/108836/43/1088364306.jpg',
                },
                {
                    id: 3,
                    title: 'Titulo 2',
                    description: 'Descripcion 2',
                    url: 'https://cdnmundo1.img.sputniknews.com/images/108836/43/1088364306.jpg',
                },
                {
                    id: 7,
                    title: 'Titulo 2',
                    description: 'Descripcion 2',
                    url: 'https://cdnmundo1.img.sputniknews.com/images/108836/43/1088364306.jpg',
                }
              ], {
              type: Actions.Types.DELETE_ITEM,
              payload: 3
            })
        ).toEqual([
            {
                id: 1,
                title: 'Titulo 1',
                description: 'Descripcion 1',
                url: 'https://cdnmundo1.img.sputniknews.com/images/108836/43/1088364306.jpg',
            },
            {
                id: 7,
                title: 'Titulo 2',
                description: 'Descripcion 2',
                url: 'https://cdnmundo1.img.sputniknews.com/images/108836/43/1088364306.jpg',
            }
        ])


        expect(
            reducer([
                {
                    id: 1,
                    title: 'Titulo 1',
                    description: 'Descripcion 1',
                    url: 'https://cdnmundo1.img.sputniknews.com/images/108836/43/1088364306.jpg',
                }
              ], {
              type: Actions.Types.DELETE_ITEM,
              payload: 4
            })
        ).toEqual([
            {
                id: 1,
                title: 'Titulo 1',
                description: 'Descripcion 1',
                url: 'https://cdnmundo1.img.sputniknews.com/images/108836/43/1088364306.jpg',
            }
        ])
    })


    it('should handle UPDATE_ITEM', () => {

        const target = {
            id: 1,
            title:'Titulo',
            description:'Descripción',
            url:'https://cdnmundo1.img.sputniknews.com/images/108836/43/1088364306.jpg' 
        }

        expect(
            reducer([], {
              type: Actions.Types.UPDATE_ITEM,
              payload: target
            })
        ).toEqual([])

        expect(
            reducer([{
                id: 1,
                title:'Titulo',
                description:'Descripción',
                url:'https://cdnmundo1.img.sputniknews.com/images/108836/43/1088364306.jpg'
            }], {
              type: Actions.Types.UPDATE_ITEM,
              payload: target
            })
        ).toEqual([target])

        expect(
            reducer([{
                id: 1,
                title:'Titulo largooooooooo',
                description:'Descripción corta',
                url:'https://cdnmundo1.img.sputniknews.com/images/108836/43/1088364306.jpg'
            }], {
              type: Actions.Types.UPDATE_ITEM,
              payload: target
            })
        ).toEqual([target])


        expect(
            reducer([{
                id: 1,
                title:'Titulo largooooooooo',
                description:'Descripción corta',
                url:'https://cdnmundo1.img.sputniknews.com/images/108836/43/1088364306.jpg'
            },
            {
                id: 2,
                title:'Titulo 2',
                description:'Descripción 2',
                url:'https://cdnmundo1.img.sputniknews.com/images/108836/43/1088364306.jpg'
            },
            {
                id: 4,
                title:'Titulo 4',
                description:'Descripción 4',
                url:'https://cdnmundo1.img.sputniknews.com/images/108836/43/1088364306.jpg'
            }
            ], {
              type: Actions.Types.UPDATE_ITEM,
              payload: {
                id: 2,
                title:'Titulo largooooooooo',
                description:'Descripción corta',
                url:'https://i.blogs.es/2b7c9a/moon-colors/450_1000.jpg'
            }
            })
        ).toEqual([{
            id: 1,
            title:'Titulo largooooooooo',
            description:'Descripción corta',
            url:'https://cdnmundo1.img.sputniknews.com/images/108836/43/1088364306.jpg'
        },
        {
            id: 2,
            title:'Titulo largooooooooo',
            description:'Descripción corta',
            url:'https://i.blogs.es/2b7c9a/moon-colors/450_1000.jpg'
        },
        {
            id: 4,
            title:'Titulo 4',
            description:'Descripción 4',
            url:'https://cdnmundo1.img.sputniknews.com/images/108836/43/1088364306.jpg'
        }]) 
    })
})