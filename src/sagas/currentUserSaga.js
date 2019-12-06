import {delay} from "redux-saga";

export function* currentUserSaga() {

  while(true) {
    yield delay(1000)

    console.info('current user saga loop')
  }

}
