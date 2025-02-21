import errorImg from "./../assets/list-creation-failure-img.png"
import CustomBtn from "./CustomBtn"

const ErrorPage = ({onTry}) => {
  return (
    <div className="text-center">
        <img src={errorImg} alt="error image" className="m-auto" />
        <h2 className="text-2xl text-stone-500 font-semibold pb-6">Something went wrong. Please try again</h2>
        <CustomBtn onClick={onTry}>Try again</CustomBtn>
    </div>
  )
}

export default ErrorPage