# Authentication and account

## When
Sign-up, sign-in, OTP/magic link, social sign-in, passkeys, biometrics, password reset, session expiry, logout, account deletion.

## Choosing the method (decided by the task / PM — propose, don't invent)
- Passwordless first when possible: passkeys, Sign in with Apple / Google, email or SMS one-time code.
- Password only if the product requires it; then show rules up front and a show/hide toggle.
- Biometrics (Face ID / fingerprint) = quick unlock of an existing session, not a sign-up method.

## Flow — sign-up / sign-in
1. One entry screen: social/passkey buttons + email/phone field; «Sign up» and «Sign in» merged where the backend allows («Continue with email»).
2. Identifier → if account exists → sign in; if not → create (avoid making the user guess which one).
3. OTP screen: code length shown, auto-fill from SMS/email, auto-submit on last digit, resend with countdown («Resend in 0:30»), «Change number/email».
4. Minimal profile (name only if needed), terms consent as text with links (checkbox only if legally required — check with PM).
5. Offer biometrics/passkey after the first successful sign-in, not before.
6. Land the user where they were going (deep link / the action that required sign-in).

## Password reset
Entry from sign-in («Forgot password?») → identifier → «If an account exists, we've sent a link/code» (no account enumeration) → new password with rules → signed in automatically.

## Sessions
- Session expired → explain and return the user to the same place after re-auth; keep unsaved input.
- Logout in profile/settings, with confirmation only if data may be lost.
- Account deletion: findable in-app (profile → settings), explains consequences, confirm by typing/re-auth; required by App Store and Google Play for apps with account creation (check current store rules).

## Must-have states
Loading on each step · wrong code / expired code · too many attempts (cooldown time shown) · no network · account exists / doesn't exist · social sign-in cancelled · email not verified · locked account · biometrics changed/unavailable.

## Platform notes
- **iOS:** Sign in with Apple button per Apple design guidelines; one-time code autofill (`.oneTimeCode`); passkeys via AuthenticationServices sheet; Face ID requires a usage description string; password autofill from Keychain (HIG).
- **Android:** Credential Manager (passkeys, passwords, Google sign-in in one bottom sheet); SMS Retriever / User Consent for OTP autofill; BiometricPrompt system dialog (Material).
- **Flutter:** `sign_in_with_apple`, `google_sign_in`, `local_auth` (biometrics — system dialogs differ per OS), `autofillHints: [AutofillHints.oneTimeCode]`; passkeys through a plugin — confirm with developers what's supported before designing it; system sheets can't be restyled, design around them.

## Copy
«Continue with Apple», «Send code», «Enter the 6-digit code sent to +371 •••• 1234». Errors: «Code is incorrect. 2 attempts left.»

## Anti-patterns
Separate sign-up and sign-in mazes · password rules shown only after failure · OTP split boxes without paste/autofill · revealing whether an email is registered · forcing re-login on every launch without biometric option · hidden account deletion.

## QA checklist
Autofill works · resend timer · all error states · return-to-origin after sign-in · deletion path exists · system sheets not mocked as custom UI · copy masks personal data.
