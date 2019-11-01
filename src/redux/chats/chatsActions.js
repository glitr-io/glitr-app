// import { store } from '../store';
import Chance from 'chance';
const chance = new Chance();

export const CHATS_CREATE_NEW_CHAT = 'CHATS_CREATE_NEW_CHAT';
export const CHATS_ADD_MESSAGE = 'CHATS_ADD_MESSAGE';
export const CHATS_UPDATE_GROUP_NAME = 'CHATS_UPDATE_GROUP_NAME';
export const CHATS_UPDATE_GROUP_ICON = 'CHATS_UPDATE_GROUP_ICON';
export const CHATS_UPDATE_ADD_ADMIN = 'CHATS_UPDATE_ADD_ADMIN';
export const CHATS_UPDATE_REMOVE_ADMIN = 'CHATS_UPDATE_REMOVE_ADMIN';
export const CHATS_UPDATE_ADD_USER = 'CHATS_UPDATE_ADD_USER';
export const CHATS_UPDATE_REMOVE_USER = 'CHATS_UPDATE_REMOVE_USER';
export const CHATS_MARK_MESSAGE_AS_READ = 'CHATS_MARK_MESSAGE_AS_READ';
export const CHATS_EXIT_CHAT = 'CHATS_EXIT_CHAT';
export const CHATS_DELETE_CHAT = 'CHATS_DELETE_CHAT';
export const CHATS_REPORT_CHAT = 'CHATS_REPORT_CHAT';

export const createChat = (users) => {
    // const { account: { accountId }, contacts: { contacts } } = store.getState();

    const groupMembers = users.map(userId => contacts.find(contact => contact.id === userId));

    const newChat = {
        id: chance.hash(),
        meta: {
            users: [...users, accountId],
            groupName: groupMembers.length === 1
                ? `${groupMembers[0].firstName} ${groupMembers[0].lastName}`
                : `new group with ${users.length} members`,
            groupIcon: groupMembers.length === 1
                ? groupMembers[0].thumbnail
                : `http://thecatapi.com/api/images/get?format=src&type=gif&size=small&salt=${chance.word({ syllables: 3 })}`,
            admins: users.length === 1 ? [accountId, users[0]] : [accountId],
            createdAt: new Date().valueOf(),
            updatedAt: new Date().valueOf()
        },
        messages: []
    };

    return ({
        type: CHATS_CREATE_NEW_CHAT,
        payload: newChat
    });
}

export const addMessage = (chatId, newMessage) => ({
    type: CHATS_ADD_MESSAGE,
    payload: {
        chatId,
        newMessage
    }
});

export const updateGroupName = (chatId, newName) => ({
    type: CHATS_UPDATE_GROUP_NAME,
    payload: {
        chatId,
        newName
    }
});

export const updateGroupIcon = (chatId, newIcon) => ({
    type: CHATS_UPDATE_GROUP_ICON,
    payload: {
        chatId,
        newIcon
    }
});

export const addAdmin = (chatId, newAdmin) => ({
    type: CHATS_UPDATE_ADD_ADMIN,
    payload: {
        chatId,
        newAdmin
    }
});

export const removeAdmin = (chatId, adminToRemove) => ({
    type: CHATS_UPDATE_REMOVE_ADMIN,
    payload: {
        chatId,
        adminToRemove
    }
});

export const addUsers = (chatId, newUsers) => {
    console.log('action:', newUsers);
    return ({
        type: CHATS_UPDATE_ADD_USER,
        payload: {
            chatId,
            newUsers
        }
    });
}

export const removeUser = (chatId, userToRemove) => ({
    type: CHATS_UPDATE_REMOVE_USER,
    payload: {
        chatId,
        userToRemove
    }
});

export const markMessageAsRead = (chatId, messageIndex) => ({
    type: CHATS_MARK_MESSAGE_AS_READ,
    payload: {
        chatId,
        messageIndex
    }
});

export const exitChat = (chatId, userToRemove) => ({
    type: CHATS_EXIT_CHAT,
    payload: {
        chatId,
        userToRemove
    }
});

export const deleteChat = (chatId) => ({
    type: CHATS_DELETE_CHAT,
    payload: chatId
});
