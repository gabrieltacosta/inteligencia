import loading from "/loading.svg";

const Loading = () => {
    return ( 
        <div className="flex flex-col justify-center items-cente">
            <img src={loading} alt="Loading" width={100} />
        </div>
     );
}
 
export default Loading;