import React, { Component } from 'react'

 class componentUpdatingLifecycleB extends Component {
constructor(props) {
    super(props)

    this.state = {
         name:"Mighty God!"
    }

    console.log ('Life cycle B:constructor')

}

static getDerivedStateFromProps(props,state){
    console.log ('Life cycle B:getDerivedStateFromProps')

    return null
}

componentDidMount(){
    console.log ('Life cycle B: componentDidMount')
}

shouldComponentUpdate(){
    console.log ('Life cycle B: should component update')
    return true
}


 getSnapshotBeforeUpdate(preProps,preState){
    console.log('Life cycle B: getSnapshotBeforeUpdate')
    return null
}
    render() {
        console.log ('Life cycle B: render')
        return (
            <div>
                Life cycle B
            </div>
        )
    }
}

export default componentUpdatingLifecycleB
