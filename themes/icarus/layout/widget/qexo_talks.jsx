const { URL } = require('url');
const { Component } = require('inferno');
const { cacheComponent } = require('hexo-component-inferno/lib/util/cache');

class QexoTalks extends Component {
    render() {
        const js = `loadSideBarTalks('qexo-sidebar-talks', 'https://qexo.rukaax.top', 5);`;
        return (
            <div class="card widget">
                <div class="card-content">
                    <div class="menu">
                        <h3 class="menu-label">最近说说</h3>
                        <ul class="menu-list qexo-sidebar-talks"></ul>
                    </div>
                    <script dangerouslySetInnerHTML={{ __html: js }}></script>
                    <a class="link-more button is-light is-small size-small" href="/talks/">查看更多</a>
                </div>
            </div>
        );
    }
}


module.exports = QexoTalks;
