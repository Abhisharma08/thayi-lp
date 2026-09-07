"use server";

import { z } from "zod";

const leadSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  company: z.string().min(2),
  lead_source: z.string(),
});

const HUBSPOT_API_KEY =
  process.env.HUBSPOT_API_KEY || "YOUR_HUBSPOT_API_KEY";

async function createOrUpdateHubspotContact(
  properties: Record<string, string>
) {
  if (HUBSPOT_API_KEY === "YOUR_HUBSPOT_API_KEY") {
    console.warn(
      "HubSpot API Key is not set. Skipping contact submission."
    );

    return {
      success: true,
      message: "Contact submission skipped because API key is not set.",
    };
  }

  try {
    /*
     * Search for an existing contact using email
     */
    const searchResponse = await fetch(
      "https://api.hubapi.com/crm/v3/objects/contacts/search",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${HUBSPOT_API_KEY}`,
        },
        body: JSON.stringify({
          filterGroups: [
            {
              filters: [
                {
                  propertyName: "email",
                  operator: "EQ",
                  value: properties.email,
                },
              ],
            },
          ],
        }),
      }
    );

    if (!searchResponse.ok) {
      const errorBody = await searchResponse.json();

      console.error(
        "HubSpot API Error (Search):",
        errorBody
      );

      return {
        success: false,
        message: "Failed to search for contact in HubSpot.",
      };
    }

    const searchData = await searchResponse.json();

    /*
     * If the contact already exists, update it
     */
    if (
      searchData.results &&
      searchData.results.length > 0
    ) {
      const contactId = searchData.results[0].id;

      const updateResponse = await fetch(
        `https://api.hubapi.com/crm/v3/objects/contacts/${contactId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${HUBSPOT_API_KEY}`,
          },
          body: JSON.stringify({
            properties,
          }),
        }
      );

      if (!updateResponse.ok) {
        const errorBody = await updateResponse.json();

        console.error(
          "HubSpot API Error (Update):",
          errorBody
        );

        return {
          success: false,
          message: "Failed to update contact in HubSpot.",
        };
      }

      return {
        success: true,
        message: "Contact updated successfully.",
      };
    }

    /*
     * If no contact exists, create a new one
     */
    const createResponse = await fetch(
      "https://api.hubapi.com/crm/v3/objects/contacts",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${HUBSPOT_API_KEY}`,
        },
        body: JSON.stringify({
          properties,
        }),
      }
    );

    if (!createResponse.ok) {
      const errorBody = await createResponse.json();

      console.error(
        "HubSpot API Error (Create):",
        errorBody
      );

      return {
        success: false,
        message: "Failed to create contact in HubSpot.",
      };
    }

    return {
      success: true,
      message: "Contact created successfully.",
    };
  } catch (error) {
    console.error(
      "HubSpot contact submission error:",
      error
    );

    return {
      success: false,
      message:
        "An unexpected error occurred while submitting the form.",
    };
  }
}

export async function submitLead(
  data: z.infer<typeof leadSchema>
) {
  const validatedData = leadSchema.safeParse(data);

  if (!validatedData.success) {
    return {
      success: false,
      message: "Invalid form data.",
    };
  }

  const {
    name,
    email,
    phone,
    company,
    lead_source,
  } = validatedData.data;

  /*
   * Split full name into first name and last name
   */
  const [firstName, ...lastNameParts] =
    name.trim().split(/\s+/);

  const lastName = lastNameParts.join(" ");

  const properties = {
    firstname: firstName,
    lastname: lastName,
    email,
    phone,

    /*
     * HubSpot company field
     */
    company,

    /*
     * Your custom HubSpot property
     */
    lead_source,
  };

  return await createOrUpdateHubspotContact(
    properties
  );
}