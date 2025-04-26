function delayedLog(text, delayMs) {
    setTimeout(() => {
        console.log(text);
    }, delayMs);
}

delayedLog("Повідомлення з'явиться через 2 секунди", 2000);
