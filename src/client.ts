import { PresencePayload } from './interfaces/presence';
import { TextDocument, workspace, window } from 'vscode';

export function UpdatePresence(Presence: PresencePayload): void {
    Presence.state = `Workspace: ${workspace.name}`;
    Presence.details = `Editing ${window.activeTextEditor.document.fileName}`;
    Presence.startTimestamp = Date.now();
    Presence.smallImageText = 'Visual Studio Code';
}