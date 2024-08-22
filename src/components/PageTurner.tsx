import { useState } from "react"


// not implented as a component unfortunately 
export default function PageTurner(){


    const [pageNumber, setPageNumber] = useState(1)

    function pageForwards(){
        const setPageNumber =- 1
    }
    function pageBackwards(){
        const setPageNumer =+ 1
    }
    return(
        <div>
            {/* Page Change Buttons */}
            <div className="content-center justify-center align-center">
                    <button id="previousPage" onClick={pageBackwards}  className="px-5">
                    Previous
                </button>
                <button id="nextPage" onClick={pageForwards} className="px-5">
                    Next
                </button>
            </div>
            {/*  */}

            {/* Page Nmber */}
            <div>
                {`Page ${pageNumber}`}
            </div>
            {/*  */}

        </div>
    )
}