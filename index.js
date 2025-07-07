window.SillyTavern.registerExtension({
    name: 'SettingsExample',
    init: function () {
        // 加载设置
        const settings = window.SillyTavern.loadSettings('SettingsExample');
        console.log('设置:', settings);
    },
    settings: function () {
        return `
            <div class="settings-example">
                <label>设置 1:</label>
                <input type="text" id="setting1" />
                <label>设置 2:</label>
                <input type="checkbox" id="setting2" />
            </div>
        `;
    }
});

window.SillyTavern.selectClick=function(){
    
}