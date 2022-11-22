import axios from 'axios';
import fs from 'fs';
import path from 'path';
export const sendNotification = async (serverKey = '', deviceIds: string[], payload: any, silent = false) => {
  // read json file from local

  const message = {
    notification: {
      title: payload.notification.title,
      body: payload.notification.body,
    },
    data: payload.data,
    priority: silent ? 'normal' : 'high',
    android: {
      priority: silent ? 'normal' : 'high',
    },
    mutable_content: true,
    apns: {
      payload: {
        aps: {
          sound: silent ? '' : 'default',
        },
      },
    },
    to: deviceIds.join(','),
  };

  try {
    const { data: response } = await axios.post('https://fcm.googleapis.com/fcm/send', message, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `key=${serverKey}`,
      },
    });

    console.log('response', response);

    return {
      failureCount: response.failureCount,
      successCount: response.successCount,
    };
  } catch (e) {
    console.log(e);
  }
};
