/**
 * Utility to send data to n8n webhooks.
 */
export async function sendWebhook(endpoint: string, data: Record<string, unknown>) {
    const webhookUrl = process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL;

    if (!webhookUrl) {
        console.error("N8N Webhook URL is not defined in environment variables.");
        return { success: false, error: "Configuration error" };
    }

    try {
        const response = await fetch(`${webhookUrl}/${endpoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error(`Webhook failed with status: ${response.status}`);
        }

        return { success: true };
    } catch (error) {
        console.error("Error sending webhook:", error);
        return { success: false, error: "Network error" };
    }
}
