import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

import {db} from "../../firebase";

// 액션 타입을 정해줍니다.
const CREATE = "bucket/CREATE";
const DELETE = "bucket/DELETE";
const LOAD = "bucket/LOAD";

// 초기 상태값을 만들어줍니다.
const initialState = {
  list: ["영화관 가기", "매일 책읽기", "수영 배우기"],
};

// 리듀서예요.
// 실질적으로 store에 들어가 있는 데이터를 변경하는 곳이죠!
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "bucket/CREATE": {
        console.log("이제 값을 바꿀거야!");
        const new_bucket_list = [...state.list, action.bucket];
        return {list : new_bucket_list};
    }
    case "bucket/DELETE": {
      const new_bucket_list = state.list.filter((l, idx) => {
        return parseInt(action.bucket_index) !== idx;
      });
     return {list: new_bucket_list};
    }
    case "bucket/LOAD": {
      return {list: action.bucket_list}
    }
    default:
      return state;
  }
}

// 액션 생성 함수예요.
// 액션을 만들어줄 함수죠!
export function createBucket(bucket){
  console.log("액션을 생성할거야!");
    return {type: CREATE, bucket: bucket};
}

export function deleteBucket(bucket_index){
  console.log("지울 버킷 인덱스", bucket_index);
  return {type: DELETE, bucket_index};
}

export function loadBucket(bucket_list) {
  return {type: LOAD, bucket_list: bucket_list}
}

// 미들웨어: 파이어베이스와 통신하는 곳
export const loadBucketFB = () => {
  return async function (dispatch) {
    // 데이터를 가져와요!
    const bucket_data = await getDocs(collection(db, "vocas"));
    
    let bucket_list  = [];

    // 하나씩 우리가 쓸 수 있는 배열 데이터로 만들어줍시다!
    bucket_data.forEach((b) => {
      // 콘솔로 확인해요!
      console.log(b.id, b.data());
      bucket_list.push({ id: b.id, ...b.data() });
    });

    // 잘 만들어졌는 지 리스트도 확인해봐요! :)
    console.log(bucket_list);
    dispatch(loadBucket(bucket_list));
  }
}

// 파이어베이스랑 통신하는 부분
export const addBucketFB = (bucket) => {
  return async function (dispatch) {
		// 파이어스토어에 추가하기를 기다려요!
    const docRef = await addDoc(collection(db, "vocas"), bucket);
		// 추가한 데이터 중 id를 가져와서 bucket_data를 만들어줬어요!
    const bucket_data = { id: docRef.id, ...bucket };
		// 그럼 이제 액션을 일으키자! (수정해달라고 요청하자!)
    dispatch(createBucket(bucket_data));
  }
}