import * as React from 'react';

type Props = {
  name: string
}

type State = {
  count: number,
}

class MyComponent extends React.Component<Props, State> {
  state = {
    count: 0,
  }

  componentDidMount() {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }))
  }

  render() {
    return <div>Count: {this.state.count}</div>
  }
}

<MyComponent />
