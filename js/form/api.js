import { showAlert } from './../util.js';

const SEND_DATA_URL = 'https://27.javascript.pages.academy/kekstagram-simple';
const GET_DATA_URL = 'https://27.javascript.pages.academy/kekstagram-simple/data';

const getData = (onSuccess) => {
  fetch(GET_DATA_URL)
    .then((response) => response.json())
    .then((picturesData) => {
      onSuccess(picturesData);
    })
    .catch(() => {
      showAlert('Ошибка отправки данных, попробуйте ещё раз.');
    });
};

const sendData = async (onSuccess, onFail, body) => {
  try {
    const response = await fetch(
      SEND_DATA_URL,
      {
        method: 'POST',
        body,
      },
    );
    if(!response.ok) {
      throw new Error('Ошибка отправки данных, попробуйте ещё раз.');
    }
    onSuccess();
  }
  catch(error) {
    onFail(error.message);
  }
};

export {
  getData,
  sendData
};
