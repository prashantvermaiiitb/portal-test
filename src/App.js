import DynamicPortalCreationDemo from "./component/dynamic-portal/dynamic.portal.demo";
import PortalHookDemo from "./component/portal-hook-demo/portal.hook.demo";
import PortalWrapperDemo from "./component/portal-wrapper";

const StaticPortalHookDemo = () => <PortalHookDemo><span>Hi World!!, from Child of Portal</span></PortalHookDemo>

function App() {
  return (
    <div className="App">
      <header className="App-header">App Header</header>
      <StaticPortalHookDemo/>
      <DynamicPortalCreationDemo/>
      <PortalWrapperDemo message={'Props for Hello World Component from App!!'}/>
    </div>
  );
}



export default App;
