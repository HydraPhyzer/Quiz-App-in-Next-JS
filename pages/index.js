import Head from "next/head";
import Header from "../Components/Header";
import Question from "../Components/Question";
import Result from '../Components/Result'
import {useSelector} from 'react-redux'

let Home = () => {
  let StatsTwo = useSelector((Stat) => {
    return Stat.ReducerTwo;
  });

  return (
    <>
      <Head>
        <title>Home - Quiz App</title>
      </Head>

      {!StatsTwo.Show ? (
        <div className="flex flex-col justify-center mx-auto sm:max-w-[60vw] max-w-[98vw] h-[100vh] ">
          <Header />
          <Question />
        </div>
      ) : (
        <div className="w-[100vw] h-[50vh] sm:h-[100vh] grid place-items-center">
        <Result/>
        </div>
      )}
    </>
  );
};
export default Home;
