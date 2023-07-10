import React from "react";
import { DrizzleContext } from "@drizzle/react-plugin";
import { Drizzle } from "@drizzle/store";
import drizzleOptions from "./drizzleOptions";

import { PageLoader } from "./components/static/PageLoader";
import { InitializedContent } from "./components/InitializedContent";

import "./css/App.css";

const drizzle = new Drizzle(drizzleOptions);


const App = () => {

    return (
        <DrizzleContext.Provider drizzle={drizzle}>
            <DrizzleContext.Consumer>
                {
                    drizzleContext => 
                    {
                        const { drizzle, drizzleState, initialized } = drizzleContext;

                        if (!initialized) {
                            return (<PageLoader />)
                        }

                        return(<InitializedContent 
                                    drizzle={drizzle} 
                                    drizzleState={drizzleState} 
                                />
                            )
                    }
                }
            </DrizzleContext.Consumer>
        </DrizzleContext.Provider>
    );
}

export default App;
