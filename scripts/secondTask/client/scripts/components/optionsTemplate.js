export default class OptionsTemplate {
    constructor(
        isAddingMode,
        isDeletingMode,
        isShowingMode,
    ) {
        this.isAddingMode = isAddingMode;
        this.isDeletingMode = isDeletingMode;
        this.isShowingMode = isShowingMode;
    }

    addingModeActivate = () => {
        this.isAddingMode = true;
        this.isDeletingMode = false;
        this.isShowingMode = false;
    };

    deletingModeActivate = () => {
        this.isDeletingMode = true;
        this.isAddingMode = false;
        this.isShowingMode = false;
    };

    showingModeActivate = () => {
        this.isShowingMode = true;
        this.isDeletingMode = false;
        this.isAddingMode = false;
    };
}
