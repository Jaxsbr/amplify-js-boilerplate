import './App.css';
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
Amplify.configure(awsExports);

function App() {
  return (
    <div className="App">
      <div className="app-header">
        <h1>Welcome to Amplify</h1>
      </div>
      <div className="app-body">
        <h1>Mutation Results</h1>
        <button id="MutationEventButton">Add data</button>
        <div id="MutationResult"></div>
        <hr />

        <h1>Query Results</h1>
        <div id="QueryResult"></div>
        <hr />

        <h1>Subscription Results</h1>
        <div id="SubscriptionResult"></div>
      </div>
    </div>
  );
}

export default App;
