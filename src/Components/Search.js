import React from 'react'

filterUpdate(){
    const val = this.myValue.value
    this.props.filterUpdate(val)
}
export const Search = () => {
    return (
        <header>
            <form>
                <input type="text"
                    ref={(value) => this.myValue = value}
                    placeholder="Type name.."
                    onChange={this.filterUpdate.bind(this)} />
            </form>
        </header>
    )
}
