# System permissions

## When
Push notifications, location, camera, photos, microphone, contacts, Bluetooth, calendar, app tracking (iOS ATT), health data.

## Principles
- Just-in-time: ask when the user starts the action that needs it (tap «Scan document» → camera), not at launch.
- Pre-prompt (own screen/sheet) explains the benefit in one line, then triggers the system dialog. The system dialog itself can't be restyled — only its purpose string (iOS) is ours.
- On iOS the system dialog usually appears **once**; after «Don't allow» only Settings can fix it → design the denied state.
- Ask for the minimum: «While using the app» location, limited photo access, approximate location if enough.

## Flow
1. User action that needs the permission.
2. Pre-prompt: icon/illustration, benefit sentence, «Allow» (→ system dialog) and «Not now».
3. Granted → continue the action immediately.
4. Denied → feature degrades gracefully + inline explanation + «Open Settings» button.
5. Later: re-offer only in context of the same feature, never as a nag on launch.

## Must-have states
Not asked yet · pre-prompt · granted · denied (with path to Settings) · limited/partial (photos subset, approximate location) · restricted by OS/parental controls · permission revoked while app in background.

## Platform notes
- **iOS:** purpose strings in Info.plist are shown in the dialog — write them with the designer (clear, specific); ATT prompt only for cross-app tracking; photo picker (PHPicker) needs no permission for picking; provisional push authorisation (quiet notifications) possible (HIG).
- **Android:** runtime permissions; after two denials the system stops showing the dialog; Android 13+ requires runtime permission for notifications; photo picker without permission; «Only this time» for location/camera (Material).
- **Flutter:** `permission_handler` for status and `openAppSettings()`; system dialogs come from the OS on each platform — design the pre-prompt and denied states, not the dialog; `image_picker` uses the system picker.

## Copy
Pre-prompt: «Allow notifications to get reminders before each lesson». Denied: «Camera access is off. Turn it on in Settings to scan documents.» → «Open Settings».

## Anti-patterns
Permission wall on first launch · several dialogs in a row · fake system dialogs · dead end after «Don't allow» · re-asking on every launch · vague purpose strings («App needs access»).

## QA checklist
Each permission asked in context · pre-prompt + denied state designed · Settings deep link · feature usable or clearly explained without permission · purpose strings drafted.
