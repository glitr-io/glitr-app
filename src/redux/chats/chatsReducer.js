import {
    CHATS_CREATE_NEW_CHAT,
    CHATS_ADD_MESSAGE,
    CHATS_UPDATE_GROUP_NAME,
    CHATS_UPDATE_GROUP_ICON,
    CHATS_UPDATE_ADD_ADMIN,
    CHATS_UPDATE_REMOVE_ADMIN,
    CHATS_UPDATE_ADD_USER,
    CHATS_UPDATE_REMOVE_USER,
    CHATS_MARK_MESSAGE_AS_READ,
    CHATS_EXIT_CHAT,
    CHATS_DELETE_CHAT
} from './chatsActions';

const initialState = {
    chats: [
        // {
        //     id: 'asdasd',
        //     meta: {
        //         groupName: 'new group',
        //         groupIcon: 'http://thecatapi.com/api/images/get?format=src&type=png&size=small',
        //         users: ['123456'],
        //         admins: ['123456'],
        //         createdAt: new Date().valueOf(),
        //         updatedAt: new Date().valueOf()
        //     },
        //     messages: [
        //         {
        //             sender: 'aaa',
        //             isUnread: true,
        //             message: 'http://thecatapi.com/api/images/get?format=src&type=png&size=small',
        //             createdAt: new Date().valueOf()
        //         },
        //         {
        //             sender: 'bbb',
        //             isUnread: false,
        //             message: 'http://thecatapi.com/api/images/get?format=src&type=png&size=small',
        //             createdAt: new Date().valueOf()
        //         },
        //         {
        //             sender: 'ccc',
        //             isUnread: true,
        //             message: 'http://thecatapi.com/api/images/get?format=src&type=png&size=small',
        //             createdAt: new Date().valueOf()
        //         }
        //     ]
        // }
    ]
};

export default (state = initialState, action) => {
    switch (action.type) {
        case CHATS_CREATE_NEW_CHAT:
            return {
                ...state,
                chats: [...state.chats, action.payload]
            };
        case CHATS_ADD_MESSAGE:
            return {
                ...state,
                chats: state.chats.map(chat => chat.id === action.payload.chatId
                    ? {
                        ...chat,
                        messages: [
                            ...chat.messages,
                            action.payload.newMessage
                        ],
                        meta: {
                            ...chat.meta,
                            updatedAt: new Date().valueOf()
                        }
                    }
                    : chat
                )
            };
        case CHATS_UPDATE_GROUP_NAME:
            return {
                ...state,
                chats: state.chats.map(chat => chat.id === action.payload.chatId
                    ? {
                        ...chat,
                        meta: {
                            ...chat.meta,
                            groupName: action.payload.newName,
                            updatedAt: new Date().valueOf()
                        }
                    }
                    : chat
                )
            };
        case CHATS_UPDATE_GROUP_ICON:
            return {
                ...state,
                chats: state.chats.map(chat => chat.id === action.payload.chatId
                    ? {
                        ...chat,
                        meta: {
                            ...chat.meta,
                            groupIcon: action.payload.newIcon,
                            updatedAt: new Date().valueOf()
                        }
                    }
                    : chat
                )
            };
        case CHATS_UPDATE_ADD_ADMIN:
            return {
                ...state,
                chats: state.chats.map(chat => chat.id === action.payload.chatId
                    ? {
                        ...chat,
                        meta: {
                            ...chat.meta,
                            admins: [...chat.meta.admins, action.payload.newAdmin],
                            updatedAt: new Date().valueOf()
                        }
                    }
                    : chat
                )
            };
        case CHATS_UPDATE_REMOVE_ADMIN:
            return {
                ...state,
                chats: state.chats.map(chat => chat.id === action.payload.chatId
                    ? {
                        ...chat,
                        meta: {
                            ...chat.meta,
                            admins: chat.meta.admins
                                .filter(admin => admin !== action.payload.adminToRemove),
                            updatedAt: new Date().valueOf()
                        }
                    }
                    : chat
                )
            };
        case CHATS_UPDATE_ADD_USER:
            console.log('reducer:', action.payload.newUsers);
            return {
                ...state,
                chats: state.chats.map(chat => chat.id === action.payload.chatId
                    ? {
                        ...chat,
                        meta: {
                            ...chat.meta,
                            users: [...chat.meta.users, ...action.payload.newUsers],
                            updatedAt: new Date().valueOf()
                        }
                    }
                    : chat
                )
            };
        case CHATS_UPDATE_REMOVE_USER:
            return {
                ...state,
                chats: state.chats.map(chat => chat.id === action.payload.chatId
                    ? {
                        ...chat,
                        meta: {
                            ...chat.meta,
                            users: chat.meta.users
                                .filter(user => user !== action.payload.userToRemove),
                            admins: chat.meta.admins
                                .filter(admin => admin !== action.payload.userToRemove),
                            updatedAt: new Date().valueOf()
                        }
                    }
                    : chat
                )
            };
        case CHATS_MARK_MESSAGE_AS_READ:
            return {
                ...state,
                chats: state.chats.map(chat => chat.id === action.payload.chatId
                    ? {
                        ...chat,
                        meta: {
                            ...chat.meta,
                            updatedAt: new Date().valueOf()
                        },
                        messages: chat.messages.map((message, index) => index === action.payload.messageIndex
                            ? {
                                ...message,
                                isUnread: false
                            }
                            : message
                        )
                    }
                    : chat
                )
            };
        case CHATS_EXIT_CHAT:
            return {
                ...state,
                chats: state.chats.map(chat => chat.id === action.payload.chatId
                    ? {
                        ...chat,
                        meta: {
                            ...chat.meta,
                            users: chat.meta.users
                                .filter(user => user !== action.payload.userToRemove),
                            admins: chat.meta.admins
                                .filter(admin => admin !== action.payload.userToRemove),
                            updatedAt: new Date().valueOf()
                        },
                    }
                    : chat
                )
            };
        case CHATS_DELETE_CHAT:
            console.log('reducer removing:', action.payload, state.chats.length, state.chats
                .filter(chat => chat.id !== action.payload).length);
            return {
                ...state,
                chats: state.chats
                    .filter(chat => chat.id !== action.payload)
            };
        default:
            return state;
    }
};
