import LoadingIcon from "./Loading_icon";

function LoadingWindow({ loadingWindowRef }){
    return(
        <div id="loadingWindow" ref={loadingWindowRef}>
            <h2 className="appTitleHeading">Smart Convert</h2>
            <LoadingIcon />
        </div>
    );
}

export default LoadingWindow;