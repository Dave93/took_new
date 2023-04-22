import axios from 'axios';
import fs from 'fs';
import path from 'path';
export const sendNotification = async (serverKey = '', deviceIds: string[], payload: any, silent = false) => {
  // read json file from local

  const message = {
    notification: {
      title: payload.notification.title,
      body: payload.notification.body,
      data: payload.data,
    },
    // data: {
    //   title: payload.notification.title,
    //   body: payload.notification.body,
    //   ...payload.data,
    // },
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
    to: '',
  };

  if (deviceIds.length > 0) {
    for (const deviceId of deviceIds) {
      message.to = deviceId;
      // console.log('fcm message', JSON.stringify(message));
      try {
        const { data: response } = await axios.post('https://fcm.googleapis.com/fcm/send', message, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `key=${serverKey}`,
          },
        });

        // console.log('firebase response', response);

        return {
          failureCount: response.failure,
          successCount: response.success,
        };
      } catch (e) {
        console.log(e);
      }
    }
  }
};
