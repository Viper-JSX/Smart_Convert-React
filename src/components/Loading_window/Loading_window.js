import LoadingIcon from "./Loading_icon";

function LoadingWindow(){
    return(
        <div id="loadingWindow">
            <h2 className="appTitleHeading">Smart Convert</h2>
            <LoadingIcon />
        </div>
    );
}

export default LoadingWindow;