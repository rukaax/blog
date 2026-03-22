const { URL } = require('url');
const { Component } = require('inferno');
const { cacheComponent } = require('hexo-component-inferno/lib/util/cache');

class QexoLinks extends Component {
    render() {
        const js = `loadSideBarFriends('qexo-sidebar-friends', 'https://qexo.rukaax.top');`;
        return (
            <div class="card widget">
                <div class="card-content">
                    <div class="menu">
                        <h3 class="menu-label">友情链接</h3>
                        <ul class="menu-list qexo-sidebar-friends"></ul>
                    </div>
                    <script dangerouslySetInnerHTML={{ __html: js }}></script>
                    <a class="link-more button is-light is-small size-small" href="/links/">查看更多</a>
                </div>
            </div>
        );
    }
}


module.exports = QexoLinks;
