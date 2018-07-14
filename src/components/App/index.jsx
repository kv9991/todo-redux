import React from "react";
import Index from "@pages/Index";
import Info from "@pages/Info";
import Header from "@components/Header"
import Footer from "@components/Footer";

import { 
  Switch, 
  Route, 
  withRouter 
} from "react-router";

class App extends React.Component {
    
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  componentDidUpdate(prevProps) {
    const { location } = this.props;

    if (location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Index}/>
          <Route path="/info" component={Info} />
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default withRouter(App);