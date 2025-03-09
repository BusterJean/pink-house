import time
import pygetwindow as gw
import keyboard

def get_roblox_window():
    windows = gw.getWindowsWithTitle("Roblox")
    return windows[0] if windows else None

def send_chat_message():
    roblox_window = get_roblox_window()
    if not roblox_window:
        print("Roblox window not found. Make sure it is running.")
        return

    # Activate Roblox window
    roblox_window.activate()
    time.sleep(1)  # give it time to focus

    # Open chat using '/'
    keyboard.send("/")
    time.sleep(0.5)

    # Paste your message using Ctrl+V
    keyboard.send("ctrl+v")
    time.sleep(0.5)

    # Press Enter to send the chat message
    keyboard.send("enter")
    print("Chat message sent!")

def main():
    try:
        while True:
            send_chat_message()
            time.sleep(1)  # adjust timing as needed
    except KeyboardInterrupt:
        print("Script terminated by user.")

if __name__ == "__main__":
    main()
