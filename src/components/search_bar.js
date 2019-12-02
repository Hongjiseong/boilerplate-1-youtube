import React, {Component} from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            term:''
        };
    }

    render() {
        return (
            // 이렇게 최상단 클래스명과 컴포넌트명을 일치시키면 각 컴포넌트마다 연결된 css 파일 하나를 찾을 수 있다.
            // 이해가 더 쉬워질 수 있습니다.
            <div className="search-bar">
                <input placeholder="search"
                    value={this.state.term}
                    onChange={event => this.onInputChange(event.target.value)}/>
            </div>
        );
    }

    // 위의 함수를 하나로 합칠 수 있지만!!!
    // 하나씩 각각 event.terget.value 를 다 써줘가면서 무리하게 합치는것 부다는
    // 이게 더 좋은 방법이다.
    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;