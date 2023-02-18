import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  if (!configuration.apiKey) {
    res.status(500).json({
      error: {
        message: "OpenAI API key not configured, please follow instructions in README.md",
      }
    });
    return;
  }

  const product = req.body.product || '';
  const productDescription = req.body.productDescription || '';
  const targetAudience = req.body.targetAudience || '';
  const audienceInterests = req.body.audienceInterests || '';
  
  if (product.trim().length === 0) {
    res.status(400).json({
      error: {
        message: "Please enter a valid product",
      }
    });
    return;
  }

  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `Write a compelling Facebook ad for a ${product}. ${productDescription}. The target audience ${targetAudience} and interested in ${audienceInterests}. The ad should be attention-grabbing, informative, and persuade the audience to visit the product website and make a purchase. Please use a conversational and engaging tone to connect with the audience and highlight the unique benefits of the product.`,
      max_tokens: 2048,
      n: 1,
      stop: "",
      temperature: 0.5,
    });
    res.status(200).json({ result: completion.data.choices[0].text });
  } catch(error) {
    // Consider adjusting the error handling logic for your use case
    if (error.response) {
      console.error(error.response.status, error.response.data);
      res.status(error.response.status).json(error.response.data);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
      res.status(500).json({
        error: {
          message: 'An error occurred during your request.',
        }
      });
    }
  }
}

