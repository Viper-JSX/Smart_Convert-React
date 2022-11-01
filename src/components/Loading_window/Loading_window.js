import LoadingIcon from "./Loading_icon";

function LoadingWindow({ loadingWindowRef }){
    return(
        <div id="loadingWindow" ref={loadingWindowRef}>
            <LoadingIcon />
        </div>
    );
}

export default LoadingWindow;