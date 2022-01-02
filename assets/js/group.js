const Box = {
    open() {
        document
            .querySelector('#city')
            .classList
            .add("custom-filter");
        },
        close() {
        document
            .querySelector('#city')
            .classList
            .remove("custom-filter");

    }
}

