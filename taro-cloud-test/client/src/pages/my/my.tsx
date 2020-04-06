import Taro, {
  FC,
  // useEffect,
  useRouter,
} from "@tarojs/taro";
import { useSelector, useDispatch } from "@tarojs/redux";
import { View, Text, Button } from "@tarojs/components";
import { add, minus, asyncAdd } from "@/actions/counter";
import styles from "./my.module.less";

interface Imy {}
const Page: FC<Imy> = (props) => {
  // console.log('my', props);
  //======================data======================
  const counter = useSelector((e) => e.counter);
  const dispatch = useDispatch();
  const router = useRouter();
  // console.log(counter, router);
  //======================function======================
  //======================effect======================
  //======================render======================
  return (
    <View className={styles.my}>
      <Button onClick={()=>{dispatch(add())}}>+</Button>
      <Button onClick={()=>{dispatch(minus())}}>-</Button>
      <Button onClick={()=>{dispatch(asyncAdd())}}>async</Button>
      <View>
        <Text>{counter.num}</Text>
      </View>
    </View>
  );
};

Page.config = {
  navigationBarTitleText: "my",
};

export default Taro.memo(Page);
