import Taro, {
  FC,
  // useEffect,
  // useRouter,
} from '@tarojs/taro';
// import { useSelector, useDispatch } from '@tarojs/redux';
import {
  View,
  Text,
  // Button,
} from '@tarojs/components';
import styles from './Test.module.less';

interface ITest {
  name: string
}
const Test: FC<ITest> = ({ name }) => {
  // console.log('Test', props);
  //======================data======================
  //   const counter = useSelector(e => e.counter);
  //   const dispatch = useDispatch();
  //   const router = useRouter();
  //   console.log(counter, router);
  //======================function======================
  //======================effect======================
  //======================render======================
  return (
    <View className={styles.Test}>
      <Text>hello,{name}</Text>
    </View>
  );
};

// Index.config = {
//   navigationBarTitleText: 'Test'
// };

export default Taro.memo(Test);
