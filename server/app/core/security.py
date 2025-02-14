# server/app/core/security.py
from fastapi import Depends, HTTPException
from fastapi.security import HTTPBearer
from firebase_admin import auth

security = HTTPBearer()

async def get_current_user(token: str = Depends(security)):
    try:
        decoded_token = auth.verify_id_token(token.credentials)
        return decoded_token
    except Exception as e:
        raise HTTPException(
            status_code=403,
            detail=f"Invalid authentication: {str(e)}"
        )