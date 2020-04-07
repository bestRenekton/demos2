import Taro, {
  FC,
  useEffect,
  useState,
  // useEffect,
  // useRouter,
} from "@tarojs/taro";
// import { useSelector, useDispatch } from '@tarojs/redux';
import {
  View,
  Image,
  // Button,
} from "@tarojs/components";
import { AtList, AtListItem, AtButton, AtInput } from "taro-ui";

import styles from "./index.module.less";

interface ITodoItem {
  _id: string;
  name: string;
  type: number;
  date: string;
}
interface Iindex {}
const Page: FC<Iindex> = (props) => {
  // console.log('index', props);
  //======================data======================
  //   const counter = useSelector(e => e.counter);
  //   const dispatch = useDispatch();
  //   const router = useRouter();
  //   console.log(counter, router);
  const [todoList, setTodoList] = useState<Array<ITodoItem>>([]);
  const [currentTodo, setcurrentTodo] = useState("");
  //======================function======================
  const init = () => {
    Taro.cloud
      .callFunction({
        name: "todos",
        data: {
          func: "getList",
          data: {
            page: 1,
            row: 10,
          },
        },
      })
      .then((res) => {
        let back = res.result;
        console.log(back);
        let todoList = back.data;
        setTodoList(todoList);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const formatDate = (date) => {
    let t = new Date(date);
    return `${t.getFullYear()}/${t.getMonth() + 1}/${t.getDate()}`;
  };
  const addTodo = () => {
    Taro.cloud
      .callFunction({
        name: "todos",
        data: {
          func: "add",
          data: {
            value: currentTodo,
          },
        },
      })
      .then((res) => {
        let back = res.result;
        console.log(back);
        Taro.showToast({
          title: back.data.msg,
          icon: "success",
          duration: 2000,
        });
        init();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const changeTodo = (_id: string, type: number) => {
    Taro.cloud
      .callFunction({
        name: "todos",
        data: {
          func: "change",
          data: {
            _id,
            type,
          },
        },
      })
      .then((res) => {
        let back = res.result;
        console.log(back);
        Taro.showToast({
          title: back.data.msg,
          icon: "success",
          duration: 2000,
        });
        init();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //======================effect======================
  useEffect(() => {
    init();
  }, []);
  //======================render======================
  return (
    <View>
      <View className="at-article__h1">未完成</View>
      <AtList>
        {todoList
          .filter((e) => e.type === 1)
          .map((e) => (
            <AtListItem
              key={e._id}
              title={formatDate(e.date)}
              extraText={e.name}
              onClick={() => {
                changeTodo(e._id, 2);
              }}
            />
          ))}
      </AtList>
      <View className="at-article__h1">已完成</View>
      <AtList>
        {todoList
          .filter((e) => e.type === 2)
          .map((e) => (
            <AtListItem
              key={e._id}
              title={formatDate(e.date)}
              extraText={e.name}
              onClick={() => {
                changeTodo(e._id, 1);
              }}
            />
          ))}
      </AtList>
      <View className="at-article__h1">新增</View>
      <View className="at-row">
        <View className="at-col at-col-9">
          <AtInput
            name="value"
            type="text"
            placeholder="新增todo"
            value={currentTodo}
            onChange={(e) => {
              setcurrentTodo(e);
            }}
          />
        </View>
        <View className="at-col at-col-3">
          <AtButton onClick={addTodo} type="primary">
            add
          </AtButton>
        </View>
      </View>
      <View className="at-article__h1">新增</View>

      <Image
        src={
          "cloud://test-d7cy9.7465-test-d7cy9-1301777270/Saved Pictures「电子慢摇」陷入节奏的泥潭中_19052337486424281.jpg"
        }
      />
    </View>
  );
};

Page.config = {
  navigationBarTitleText: "index",
};

export default Taro.memo(Page);
