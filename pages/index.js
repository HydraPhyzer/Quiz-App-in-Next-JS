import Head from "next/head";
import Header from '../Components/Header'
import Question from '../Components/Question'

let Home = () => {
  return (
    <>
      <Head>
        <title>Home - Quiz App</title>
      </Head>
      
      <div className="flex flex-col justify-center mx-auto sm:max-w-[60vw] max-w-[98vw] h-[100vh] ">
        <Header/>
        <Question/>
      </div>
    </>
  );
};
export default Home;
